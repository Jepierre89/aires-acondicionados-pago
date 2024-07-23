import React, { useEffect, useState } from "react";
import AIR from "@/assets/AIR.svg";
import Image from "next/image";
import DELETE from "@/assets/DELETE.svg";
import { UseServiceFees } from "../../hooks/UseServiceFees";
import Select from "../CustomComponents/Select";
import { UsePaymentContext } from "../../context/PaymentContext";
import { Device } from "../../interfaces/Device";
import ServiceFeeOptionDetail from "./ServiceFeeOptionDetail";
import Option from "../../interfaces/Option";

type ServiceFeesProps = {
	devicesId: number;
};

const ServiceFees: React.FC<ServiceFeesProps> = ({ devicesId }) => {
	const { serviceFees } = UseServiceFees(devicesId);
	const {
		devicesSelected,
		setDevicesSelected,
		serviceFeesSelected,
		setServiceFeesSelected,
		totalPrice,
		setTotalPrice,
		totalTime,
		setTotalTime,
	} = UsePaymentContext();

	useEffect(() => {
		// Retrieve initial state from local storage or context if available
		const savedServiceFeesSelected = JSON.parse(
			localStorage.getItem("serviceFeesSelected") || "[]"
		);
		const savedTotalPrice = parseFloat(
			localStorage.getItem("totalPrice") || "0"
		);

		setServiceFeesSelected(savedServiceFeesSelected);
		setTotalPrice(savedTotalPrice);
	}, [setServiceFeesSelected, setTotalPrice]);

	const handleDeleteAir = () => {
		setDevicesSelected(
			devicesSelected.filter((device: Device) => device.id !== devicesId)
		);
	};

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		const feeAlreadySelected = serviceFeesSelected.find(
			(service: Option) => service.devicesId === devicesId
		);

		if (feeAlreadySelected) {
			setServiceFeesSelected(
				serviceFeesSelected.filter(
					(service: Option) => service.devicesId !== devicesId
				)
			);
			setTotalPrice(totalPrice - feeAlreadySelected.value);
			return;
		}

		const selectedFee = serviceFees.find(
			(fee: Option) => fee.id === parseInt(event.target.value)
		);

		if (selectedFee) {
			setServiceFeesSelected([
				...serviceFeesSelected.filter(
					(service: Option) => service.devicesId !== devicesId
				),
				selectedFee,
			]);
			setTotalPrice(totalPrice + selectedFee.value);
		}
	};

	return (
		<article className="flex flex-col max-w-2xl my-8">
			<div className="flex items-center w-full justify-between flex-grow my-2">
				<picture>
					<Image src={AIR} alt="AIR" width={32} height={32} className="mr-2" />
				</picture>
				<h3 className="flex-1">Aire acondicionado {devicesId}</h3>
				{/* <picture onClick={handleDeleteAir} className="hover:cursor-pointer">
					<Image src={DELETE} alt="DELETE" width={24} height={24} />
				</picture> */}
			</div>
			<div className="w-full">
				<Select onChange={handleSelectChange}>
					{serviceFees &&
						serviceFees.map((value, i) => {
							return <ServiceFeeOptionDetail serviceFee={value} key={i} />;
						})}
				</Select>
			</div>
		</article>
	);
};

export default ServiceFees;
