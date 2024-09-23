"use client";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { UsePaymentContext } from "@/app/payments/context/PaymentContext";
import ApartmentSelect from "@/app/payments/components/SelectApartment/ApartmentSelect";
import BuildingSelect from "@/app/payments/components/SelectBuilding/BuildingSelect";
import Button from "@/app/payments/components/CustomComponents/Button";
import { useRouter } from "next/navigation";
import ModalError from "@/app/payments/components/modals/ModalError";
import Footer from "@/app/payments/components/CustomComponents/Footer";

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

	const router = useRouter();

	const handleSubmit = useCallback(
		(e: any) => {
			e.preventDefault();
			setLoading(true);
			console.log(apartmentId, buildingId);
			if (apartmentId !== -1 && buildingId !== -1) {
				router.push(`/payments/${lang}/space-information`);
			} else {
				setActiveModalError(true);
			}
		},
		[apartmentId, buildingId, lang, router]
	);
	useEffect(() => {
		setLangSwitchDisplay(true);
	}, [setLangSwitchDisplay]);

	return (
		<section
			className={`${
				loading ? "hidden" : "modal-appear grid"
			} items-center overflow-hidden`}
		>
			<header className="text-center text-secondary-700 font-bold text-2xl px-7 sm:mb-9 row-span-1">
				<h1>{LangStrings.PickApartmentView.hello}</h1>
				<h2>{LangStrings.PickApartmentView.welcomeMessage}</h2>
			</header>
			<section className="px-10 row-span-2">
				<article className="font-normal text-lg text-start h-min items-center">
					<p className="mb-2">
						{LangStrings.PickApartmentView.informationMessage1}
					</p>
					<p>{LangStrings.PickApartmentView.informationMessage2}</p>
				</article>
				<form
					className="w-full flex items-center flex-col my-6 gap-6"
					onSubmit={handleSubmit}
				>
					<div>
						<label className="font-bold text-secondary-700 text-lg">
							{LangStrings.GeneralMessages.accommodation}
						</label>
						<BuildingSelect />
					</div>
					<div>
						<label className="font-bold text-secondary-700 text-lg">
							{LangStrings.GeneralMessages.apartmentOrRoom}
						</label>
						<ApartmentSelect />
					</div>
					<Button
						handleClick={() => {}}
						text={LangStrings.GeneralMessages.continue}
						forward
						disabled={apartmentId === -1 || buildingId === -1}
					/>
				</form>
				<ModalError
					activeModalError={activeModalError}
					setActiveModalError={setActiveModalError}
				/>
			</section>
			<Footer />
		</section>
	);
}
