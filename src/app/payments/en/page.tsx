"use client";
import React, { lazy, Suspense, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";
import ApartmentSelect from "../components/SelectApartment/ApartmentSelect";
import BuildingSelect from "../components/SelectBuilding/BuildingSelect";
import Button from "../components/CustomComponents/Button";
import { useRouter } from "next/navigation";
import ModalError from "../components/modals/ModalError";

export default function Page() {
	const [activeModalError, setActiveModalError] = useState(false);
	const { LangStrings, lang, buildingId, apartmentId } = UsePaymentContext();

	const router = useRouter();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(apartmentId, buildingId);
		if (apartmentId !== -1 && buildingId !== -1) {
			router.push(`/payments/${lang}/space-information`);
		} else {
			setActiveModalError(true);
		}
	};

	return (
		<main className="h-screen max-w-2xl px-6">
			<header className="text-center text-secondary-700 font-bold text-2xl">
				<h1>{LangStrings.PickApartmentView.hello}</h1>
				<h2>{LangStrings.PickApartmentView.welcomeMessage}</h2>
			</header>
			<article className="font-normal text-lg text-start h-min items-center">
				<p>{LangStrings.PickApartmentView.informationMessage1}</p>
				<br />
				<p>{LangStrings.PickApartmentView.informationMessage2}</p>
			</article>
			<form
				className="w-full flex items-center flex-col my-8 gap-3"
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
				/>
			</form>
			<ModalError
				activeModalError={activeModalError}
				setActiveModalError={setActiveModalError}
			/>
		</main>
	);
}
