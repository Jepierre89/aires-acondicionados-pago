import axios from "axios";
import React, { useEffect, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";

export default function UseApartments() {
	const [apartments, setApartments] = useState([]);
	const { loading, setLoading } = UsePaymentContext();
	const [error, setError] = useState<String[]>([]);
	const { buildingId, setBuildingId } = UsePaymentContext();

	useEffect(() => {
		const filter = {
			where: {
				buildingId: buildingId,
			},
		};
		const query = {
			params: {
				filter: JSON.stringify(filter),
			},
		};
		const getData = async () => {
			setLoading(true);
			try {
				const response: any = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/apartments`,
					query
				);
				if (response.data.length <= 0) {
					setApartments([]);
					setError(["No hay apartamentos en este edificio"]);
					return;
				} else {
					setApartments(response.data);
					setError(response.data);
					return;
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [buildingId, setLoading]);

	return {
		apartments,
		loading,
		error,
		setError,
	};
}
