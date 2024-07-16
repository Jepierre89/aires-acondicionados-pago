import React from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import ServiceFees from "./ServiceFees";
import { Device } from "../../interfaces/Device";

export default function ServiceFeeOptions() {
	const { devicesSelected } = UsePaymentContext();
	return (
		devicesSelected &&
		devicesSelected.map((device: Device) => {
			return <ServiceFees devicesId={device.id} key={device.id} />;
		})
	);
}
