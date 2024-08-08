"use client";
import Image from "next/image";
import Button from "../../components/CustomComponents/Button";
import { UsePaymentContext } from "../../context/PaymentContext";

import ENJOY from "@/assets/ENJOY.png";
import PaymentSuccess from "../../components/paymentStatus/PaymentSuccess";
import PaymentDeclined from "../../components/paymentStatus/PaymentDeclined";
import PaymentRejected from "../../components/paymentStatus/PaymentRejected";
import { useEffect } from "react";
import { UseTransactionStatus } from "../../hooks/UseTransactionStatus";

export default function Page() {
	const { setLoading, setLangSwitchDisplay, setNavDisplay, loading } =
		UsePaymentContext();

	const { transactionStatus } = UseTransactionStatus();
	useEffect(() => {
		if (transactionStatus) {
			console.log(transactionStatus);
		}
	}, [transactionStatus]);

	useEffect(() => {
		setLangSwitchDisplay(false);
		setNavDisplay(false);
		setLoading(false);
	}, []);

	return (
		!loading && (
			<>
				{transactionStatus === "APPROVED" ? (
					<PaymentSuccess />
				) : transactionStatus === "REJECTED" ? (
					<PaymentRejected />
				) : transactionStatus === "DECLINED" ? (
					<PaymentDeclined />
				) : (
					""
				)}
				<section className="text-center -my-5 flex flex-col items-center justify-center gap-3">
					<article>
						<h3 className="font-normal text-base">Alojamiento:</h3>
						<p className="text-2xl font-bold">Housinn</p>
					</article>
					<article>
						<h3 className="font-base text-base">Aires acondicionados:</h3>
						<div className="font-bold text-2xl flex flex-nowrap justify-center">
							<p>Aire 1 -</p>
							<p> Aire 2</p>
						</div>
					</article>
					<article>
						<h3 className="font-normal text-base">
							Tiempo de uso para cada dispositivo:
						</h3>
						<div className="font-bold text-2xl">
							<h4>8 horas</h4>
							<h4>9 horas</h4>
						</div>
					</article>
					<picture className="text-center flex items-center flex-col">
						<Image src={ENJOY} alt="..." />
						<p className="font-bold text-2xl">
							<strong>Disfruta tu estadia</strong>
						</p>
					</picture>
				</section>
				<footer className="flex flex-col items-center gap-5 my-auto">
					<Button handleClick={() => {}} forward text="Adquirir mas tiempo" />
					<Button
						handleClick={() => {}}
						text="Regresar al inicio"
						backward
						white
						textBlack
					/>
				</footer>
			</>
		)
	);
}
