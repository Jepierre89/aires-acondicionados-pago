"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import Image from "next/image";
import BKW from "@/assets/BKW-ARROW.svg";
import CNCL from "@/assets/CNCL.svg";

export default function NavButton({
	back,
	cancel,
}: {
	back?: boolean;
	cancel?: boolean;
}) {
	//TODO: Esta funcion tiene problemas para ejecutarse cuando se realiza el pago con wompi
	const router = useRouter();
	const { lang, LangStrings } = UsePaymentContext();
	const handleBack = () => {
		router.back();
	};
	const handleCancel = () => {
		router.push(`/payments/${lang}`);
	};
	return (
		<button
			onClick={back ? handleBack : handleCancel}
			className="font-bold flex items-center"
		>
			{back && <Image src={BKW} alt="..." width={25}></Image>}
			{back
				? LangStrings.GeneralMessages.return
				: LangStrings.GeneralMessages.exit}
			{cancel && <Image src={CNCL} alt="..." width={25}></Image>}
		</button>
	);
}
