"use client";
import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import REMINDER from "@/assets/REMINDER.svg";
import Image from "next/image";
import ServiceFeeOptions from "../../components/SelectFees/ServiceFeeOptions";
import { useRouter } from "next/navigation";

export default function Services() {
	const { LangStrings, devicesSelected, apartmentId, buildingId, lang } =
		UsePaymentContext();
	const router = useRouter();
	useEffect(() => {
		if (!apartmentId || !buildingId || devicesSelected.length <= 0) {
			router.push(`/payments/${lang}`);
		}
	}, [apartmentId, buildingId, devicesSelected, lang, router]);
	return (
		<main className="max-w-2xl flex flex-col items-center">
			<header className="text-center my-6">
				<h1 className="text-secondary-700 font-bold text-2xl">
					{LangStrings.PickTimeToCharge.TimeOptions}
				</h1>
				<h2 className="text-secondary-700 font-bold text-lg">
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
			<section className="my-6">
				<ServiceFeeOptions />
			</section>
		</main>
	);
}
