"use client";
import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import REMINDER from "@/assets/REMINDER.svg";
import Image from "next/image";
import ServiceFeeOptions from "../../components/SelectFees/ServiceFeeOptions";
import { useRouter } from "next/navigation";
import Button from "../../components/CustomComponents/Button";
import axios from "axios";
import moment from "moment";

export default function Services() {
	const {
		LangStrings,
		devicesSelected,
		apartmentId,
		buildingId,
		lang,
		totalPrice,
		serviceFeesSelected,
		loading,
		setLangSwitchDisplay,
	} = UsePaymentContext();
	const router = useRouter();
	useEffect(() => {
		setLangSwitchDisplay(false);
		if (!apartmentId || !buildingId || devicesSelected.length <= 0) {
			router.push(`/payments/${lang}`);
		}
	}, [
		setLangSwitchDisplay,
		apartmentId,
		buildingId,
		devicesSelected,
		lang,
		router,
	]);

	//GENERAR PROCESO DE PAGO EN LA BASE DE DATOS
	const generateProccess = async () => {
		try {
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/process-of-pays`, {
				totalValue: totalPrice,
				date: moment().subtract("5", "hours"),
			});

			//TODO IDEA para la creacion de pendingPayments, le paso el apartmentID y luego todos los servicesFees que se seleccionaron y el back acomoda todo
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/pending-payments`, {
				apartmentId,
				servicesFees: [...serviceFeesSelected],
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleClick = () => {
		if (serviceFeesSelected.length === devicesSelected.length) {
			generateProccess();
			router.push(`/payments/${lang}/summary`);
		}
	};
	return (
		<section
			className={`h-full w-96 ${
				loading ? "hidden" : "modal-appear flex flex-col items-center"
			}`}
		>
			<header className="text-center my-4">
				<h1 className="text-secondary-700 font-bold text-2xl">
					{LangStrings.PickTimeToCharge.TimeOptions}
				</h1>
				<h2 className="text-secondary-700 font-bold text-lg px-3">
					{LangStrings.PickTimeToCharge.informationMessage1}
				</h2>
			</header>
			<article className="rounded-lg bg-neutral-100 w-4/5 px-6 py-3">
				<header className="flex justify-center items-center">
					<Image
						className=""
						src={REMINDER}
						alt="Reminder"
						width={25}
						height={25}
					/>
					<h3 className="font-bold text-base text-black">
						{LangStrings.PickTimeToCharge.reminder}
					</h3>
				</header>

				<ul style={{ listStyleType: "disc" }}>
					<li>
						<p className="font-normal text-sm">
							{LangStrings.PickTimeToCharge.reminderInformation1}
						</p>
					</li>
					<li>
						<p className="font-normal text-sm">
							{LangStrings.PickTimeToCharge.reminderInformation2}
						</p>
					</li>
				</ul>
			</article>
			<section className="my-3 overflow-y-auto">
				<ServiceFeeOptions />
			</section>
			<section className="text-center mb-5">
				<h2 className="font-bold text-2xl">Total: ${totalPrice}COP</h2>
			</section>
			<Button
				text={LangStrings.GeneralMessages.continue}
				forward
				handleClick={handleClick}
				disabled={serviceFeesSelected.length !== devicesSelected.length}
			/>
		</section>
	);
}
