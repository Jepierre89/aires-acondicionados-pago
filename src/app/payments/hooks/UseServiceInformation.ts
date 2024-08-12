import { useEffect, useState } from "react";
import { serviceInformation } from "../interfaces/ServiceInformation";
import axios from "axios";

export default function UseServiceInformation(servicesSelected: number[]) {
	const [serviceInformation, setServiceInformation] =
		useState<serviceInformation>();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/apartments-by-service-fee`,
					{ servicesSelected }
				);
				setServiceInformation(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	});

	return {
		serviceInformation,
	};
}
