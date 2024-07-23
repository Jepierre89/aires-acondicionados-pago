import axios from "axios";
import React, { useEffect, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";
import { Device } from "../interfaces/Device";

export default function UseDevices() {
	const [devices, setDevices] = useState<Device[]>([]);
	const { apartmentId, setLoading } = UsePaymentContext();

	useEffect(() => {
		const getData = async () => {
			const filter = {
				where: {
					apartmentId: apartmentId,
				},
			};

			const query = {
				params: {
					filter: JSON.stringify(filter),
				},
			};

			try {
				setLoading(true);
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/devices`,
					query
				);
				setDevices(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		if (apartmentId) {
			getData();
		}
	}, [apartmentId, setLoading]);

	return { devices };
}
