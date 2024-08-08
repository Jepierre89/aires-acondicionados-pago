import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";

export function UseTransactionStatus() {
	const [transactionStatus, setTransactionStatus] = useState("");
	const searchParams = useSearchParams();

	const { setLoading } = UsePaymentContext();

	const id = searchParams.get("id");

	const getData = async () => {
		try {
			setLoading(true);
			await axios
				.get(
					`https://${process.env.NEXT_PUBLIC_FLAG}.wompi.co/v1/transactions/${id}`
				)
				.then((response) => {
					const status = response.data.data.status;

					setTransactionStatus(status);
					console.log(transactionStatus);
				});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		console.log(id);
		getData();
	}, [searchParams, transactionStatus]);
	return {
		transactionStatus,
	};
}
