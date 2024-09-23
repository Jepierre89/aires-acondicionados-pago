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
import UseBuildings from "../../hooks/UseBuildings";
import UseApartments from "../../hooks/UseApartments";
import UseServiceInformation from "../../hooks/UseServiceInformation";
import { Device } from "../../interfaces/Device";
import { ServicesFeeSelected } from "../../interfaces/ServiceInformation";
import { useSearchParams } from "next/navigation";

export default function Page() {
	const {
		setLoading,
		setLangSwitchDisplay,
		setNavDisplay,
		loading,
		setBuildingId,
		setLang,
		lang,
	} = UsePaymentContext();

	const { transactionStatus, transactionReference } = UseTransactionStatus();

	const searchParams = useSearchParams();

	const services = window.localStorage.getItem("servicesSelected");

	const parsedServices: number[] = services ? JSON.parse(services) : null;
	const { serviceInformation } = UseServiceInformation(parsedServices || []);

	useEffect(() => {
		setLangSwitchDisplay(false);
		setNavDisplay(false);
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
				<section className="text-center -my-5 items-center justify-center gap-3 grid">
					<article>
						<h3 className="font-normal text-base">Alojamiento:</h3>
						<p className="text-2xl font-bold">
							{serviceInformation && serviceInformation.buildingSelected.name}
						</p>
					</article>
					<article>
						<h3 className="font-base text-base">Aires acondicionados:</h3>
						<div className="font-bold text-2xl flex flex-nowrap justify-center">
							{serviceInformation &&
								serviceInformation.devicesSelected.map((device) => {
									return <p key={device[0].id}>{device[0].id}</p>;
								})}
						</div>
					</article>
					<article>
						<h3 className="font-normal text-base">
							Tiempo de uso para cada dispositivo:
						</h3>
						<div className="font-bold text-2xl">
							{serviceInformation?.servicesFeeSelected.map(
								(fees: ServicesFeeSelected) => {
									let minutes = 0;
									let hours = 0;
									const seconds = fees.duration || 0;
									hours = Math.floor(seconds / 3600);
									minutes = Math.floor((seconds % 3600) / 60);

									return (
										<h4 key={fees.id} className="text-2xlfont-bold">
											{hours}h {minutes}m ({fees.devicesId})
										</h4>
									);
								}
							)}
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
