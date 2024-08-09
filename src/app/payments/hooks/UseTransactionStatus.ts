import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";

export function UseTransactionStatus() {
	const [transaction, setTransaction] = useState({});
	const [transactionStatus, setTransactionStatus] = useState("");
	const [transactionReference, setTransactionReference] = useState("");

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
					const status = response.data;
					setTransaction(status);
					setTransactionStatus(status.data.status);
					setTransactionReference(status.data.reference);
					console.log(transactionReference);
					console.log(transaction);
				});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	const postData = async () => {
		console.log(transaction);
	};

	useEffect(() => {
		console.log(id);
		getData();
		postData();
	}, [searchParams, transactionStatus]);
	return {
		transactionStatus,
		transactionReference,
	};
}
