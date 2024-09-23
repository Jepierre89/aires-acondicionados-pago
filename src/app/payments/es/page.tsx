"use client";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { PaymentContex, UsePaymentContext } from "../context/PaymentContext";
import ENERGY_SAVING from "@/assets/ENERGY_SAVING.png";
import Button from "../components/CustomComponents/Button";
import { useRouter } from "next/navigation";
import ModalError from "../components/modals/ModalError";
import Footer from "../components/CustomComponents/Footer";
import Image from "next/image";

export default function Page() {
	const [activeModalError, setActiveModalError] = useState(false);

	const {
		LangStrings,
		lang,
		buildingId,
		apartmentId,
		setLangSwitchDisplay,
		loading,
		setLoading,
	} = UsePaymentContext();

	const handleClick = () => {
		router.push(`/payments/${lang}/home`);
	};

	useEffect(() => {
		setLoading(false);
		return () => setLoading(true);
	}, []);

	const router = useRouter();
	useEffect(() => {
		setLangSwitchDisplay(true);
	}, [setLangSwitchDisplay]);

	return (
		<section
			className={`h-full py-2 ${
				loading ? "hidden" : "modal-appear"
			} items-center`}
		>
			<header className="text-center text-secondary-700 font-bold text-2xl px-7 sm:mb-9">
				<h1>{LangStrings.StartAplicationView.fresh}</h1>
			</header>
			<section className="px-10">
				<article className="font-normal text-lg text-start h-min items-center">
					<p className="mb-2">
						{LangStrings.StartAplicationView.informationMessage1}
					</p>
					<p>{LangStrings.StartAplicationView.informationMessage2}</p>
				</article>
				<div className="flex flex-col items-center">
					<picture className="w-full flex items-center flex-col my-6 gap-6">
						<Image
							src={ENERGY_SAVING}
							width={175}
							height={100}
							alt="..."
						></Image>
					</picture>
					<Button
						forward
						text={LangStrings.GeneralMessages.chargeAir}
						handleClick={handleClick}
					></Button>
				</div>
				<ModalError
					activeModalError={activeModalError}
					setActiveModalError={setActiveModalError}
				/>
			</section>
			<Footer />
		</section>
	);
}
