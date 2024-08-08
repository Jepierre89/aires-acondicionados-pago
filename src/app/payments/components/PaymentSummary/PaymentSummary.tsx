"use client";
import React from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import UseBuildings from "../../hooks/UseBuildings";
import { Building } from "../../interfaces/Building";

export default function PaymentSummary() {
	const { buildings } = UseBuildings();
	const context = UsePaymentContext();
	const { LangStrings } = UsePaymentContext();
	const building: Building =
		buildings.find((x: Building) => x.id === context.buildingId) ||
		Object.create(null);
	return (
		<>
			<section className="border-4 rounded-lg border-primary-300 flex flex-col items-center py-4 bg-white ">
				<h2 className="font-normal text-lg">
					{LangStrings.GeneralMessages.ubication}:
				</h2>
				<article className="px-3 text-center">
					<h3 className="text-2xl text-secondary-700 font-bold">
						{building?.name}
					</h3>
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article>
					<h2 className="text-lg font-normal">
						{LangStrings.Summary.selectedDevices}
					</h2>
					<div className="flex flex-wrap justify-center">
						{context.devicesSelected.map((device, index) => (
							<React.Fragment key={device.id}>
								<h3 className="text-2xl text-secondary-700 font-bold">
									{LangStrings.GeneralMessages.air} {device.id}
								</h3>
								{index !== context.devicesSelected.length - 1 && (
									<span className="text-black flex justify-center items-center mx-2 text-3xl">
										{" "}
										-{" "}
									</span>
								)}
							</React.Fragment>
						))}
					</div>
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article className="text-center">
					<h2 className="text-lg font-normal">
						{LangStrings.Summary.timeToUsePerDevice}
					</h2>
					{context.serviceFeesSelected.map((fees) => {
						let minutes = 0;
						let hours = 0;
						const seconds = fees.duration || 0;
						hours = Math.floor(seconds / 3600);
						minutes = Math.floor((seconds % 3600) / 60);

						return (
							<h3
								key={fees.id}
								className="text-2xl text-secondary-700 font-bold"
							>
								{hours}h {minutes}m ({fees.devicesId})
							</h3>
						);
					})}
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article className="text-center">
					<h2 className="text-lg font-normal">
						{LangStrings.Summary.totalPayment}
					</h2>
					<h3 className="text-3xl text-secondary-700 font-bold">
						${context.totalPrice} COP
					</h3>
				</article>
			</section>
		</>
	);
}
