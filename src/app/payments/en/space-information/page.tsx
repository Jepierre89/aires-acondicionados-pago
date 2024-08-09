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
		setLoading,
		loading,
		setLangSwitchDisplay,
	} = UsePaymentContext();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();
	useEffect(() => {
		setLangSwitchDisplay(false);
	});

	useEffect(() => {
		setDevicesSelected([]);
		setServiceFeesSelected([]);
	}, [setDevicesSelected, setServiceFeesSelected]);

	const handleClick = () => {
		if (devicesSelected.length > 0) {
			setLoading(true);
			router.push(`/payments/${lang}/services`);
		}
	};

	return (
		<section
			className={`h-full py-2 sm:w-full sm:max-w-xl ${
				loading ? "hidden" : " relative modal-appear flex flex-col"
			} items-center`}
		>
			<header className="border-b-4 py-2 border-primary-300 w-full ">
				<h1 className="font-bold text-2xl text-secondary-700 my-2 text-center">
					{LangStrings.SpaceInformation.spaceInformation}
				</h1>
				<div className="text-lg">
					<h3 className="text-start sm:text-center">
						<strong>{LangStrings.GeneralMessages.accommodation}: </strong>
						{buildingId}
					</h3>
				</div>
				<div className="text-lg">
					<h3 className="text-start sm:text-center">
						<strong>{LangStrings.GeneralMessages.apartmentOrRoom}: </strong>
						{apartmentId}
					</h3>
				</div>
			</header>
			<hr className="border-y-primary-300 mx-auto my-3 border-t" />
			<section className="px-10 w-full">
				<h2 className="flex text-xl font-bold text-secondary-700 max-w-80 text-center mx-auto">
					{LangStrings.SpaceInformation.pickDeviceToCharge}
				</h2>
				<DevicesCheckTable />
			</section>
			<Button
				text={LangStrings.GeneralMessages.continue}
				forward
				handleClick={handleClick}
				disabled={devicesSelected.length <= 0}
			/>
		</section>
	);
}
