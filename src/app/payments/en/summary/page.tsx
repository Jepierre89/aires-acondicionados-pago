"use client";
import React, { lazy, Suspense, useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";
import Button from "../../components/CustomComponents/Button";
import { useRouter } from "next/navigation";
import UseReferences from "../../hooks/UseReferences";
import UseIntegritySignature from "../../hooks/UseIntegritySignature";
import LoadingButtonWompi from "../../components/CustomComponents/LoadingButtonWompi";
import PaymentButton from "../../components/CustomComponents/PaymentButton";

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
		setLoading,
	} = UsePaymentContext();
	const router = useRouter();

	const handleClick = () => {
		setServiceFeesSelected([]);
		router.push(`/payments/${lang}/services`);
	};
	useEffect(() => {
		setLangSwitchDisplay(false);
		setLoading(false);
	}, [setLangSwitchDisplay, setLoading]);
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
				<LoadingButtonWompi>
					<PaymentButton signature={signature} />
				</LoadingButtonWompi>
			</footer>
		</section>
	);
}
