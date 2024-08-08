"use client";
import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";
import Button from "../../components/CustomComponents/Button";
import { useRouter } from "next/navigation";
import UseReferences from "../../hooks/UseReferences";
import UseIntegritySignature from "../../hooks/UseIntegritySignature";
import PaymentButton from "@/app/payments/components/CustomComponents/PaymentButton";

export default function Summary() {
	const { reference } = UseReferences();
	const { signature } = UseIntegritySignature();
	const {
		LangStrings,
		lang,
		setServiceFeesSelected,
		loading,
		setLangSwitchDisplay,
		setReference,
	} = UsePaymentContext();
	const router = useRouter();

	const handleClick = () => {
		setServiceFeesSelected([]);
		router.push(`/payments/${lang}/services`);
	};
	useEffect(() => {
		setLangSwitchDisplay(false);
	}, [setLangSwitchDisplay]);
	useEffect(() => {
		setReference(reference);
	}, [setReference, reference]);

	return (
		<section
			className={`h-full w-96 ${
				loading ? "hidden" : "modal-appear flex flex-col items-center"
			}`}
		>
			<header className="my-8">
				<h1 className="font-bold text-secondary-700 text-2xl">
					{LangStrings.Summary.paymentSummary}
				</h1>
			</header>
			<PaymentSummary />
			<footer className="h-40 flex items-center justify-center flex-col gap-8">
				<Button
					text={LangStrings.GeneralMessages.editDetails}
					backward
					white
					handleClick={handleClick}
					textBlack
				/>
				<PaymentButton signature={signature} />
			</footer>
		</section>
	);
}
