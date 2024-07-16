import axios from "axios";
import { useEffect, useState } from "react";
import Option from "@/app/payments/interfaces/Option";

export const UseServiceFees = (devicesId: number) => {
	const [serviceFees, setServiceFees] = useState<Option[]>([]);

	useEffect(() => {
		const filter = {
			where: {
				devicesId: devicesId,
			},
		};
		const query = {
			params: {
				filter: JSON.stringify(filter),
			},
		};

		const getData = async () => {
			try {
				const data: any = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/service-fees`,
					query
				);
				setServiceFees(data.data);
			} catch (error) {
				console.log(error);
			}
		};

		getData();
	}, []);

	return {
		serviceFees,
	};
};
