"use client";
import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import DevicesCheckTable from "../../components/SelectDevices/DevicesCheckTable";
import Button from "../../components/CustomComponents/Button";
import { useRouter } from "next/navigation";

export default function SpaceInformation() {
	const {
		LangStrings,
		buildingId,
		apartmentId,
		devicesSelected,
		lang,
		setDevicesSelected,
		setServiceFeesSelected,
	} = UsePaymentContext();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();

	useEffect(() => {
		setDevicesSelected([]);
		setServiceFeesSelected([]);
	}, [setDevicesSelected, setServiceFeesSelected]);

	const handleClick = () => {
		if (devicesSelected.length > 0) {
			router.push(`/payments/${lang}/services`);
		}
	};

	return (
		<>
			<header className="text-start border-b border-primary-300">
				<h1 className="font-bold text-2xl text-secondary-700 my-2 text-center">
					{LangStrings.SpaceInformation.spaceInformation}
				</h1>
				<div className="text-lg">
					<h3>
						<strong>{LangStrings.GeneralMessages.accommodation}: </strong>
						{buildingId}
					</h3>
				</div>
				<div className="text-lg">
					<h3>
						<strong>{LangStrings.GeneralMessages.apartmentOrRoom}: </strong>
						{apartmentId}
					</h3>
				</div>
			</header>
			<hr className="border-y-primary-300 mx-auto my-3 border-t" />
			<section>
				<header>
					<h2 className="flex text-xl font-bold text-secondary-700 max-w-80 text-center">
						{LangStrings.SpaceInformation.pickDeviceToCharge}
					</h2>
				</header>
				<DevicesCheckTable />
			</section>
			<footer className="my-auto">
				<Button
					text={LangStrings.GeneralMessages.continue}
					forward
					handleClick={handleClick}
				/>
			</footer>
		</>
	);
}
