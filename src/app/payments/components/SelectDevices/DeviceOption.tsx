import React, { useState } from "react";
import type { Device } from "../../interfaces/Device";
import { UsePaymentContext } from "../../context/PaymentContext";

export default function DeviceOption({ device }: { device: Device }) {
	const { setDevicesSelected, devicesSelected } = UsePaymentContext();
	//CALCULAR HORAS Y MINUTOS
	let minutes = 0;
	let hours = 0;
	const seconds = device.paidTime || 0;
	hours = Math.floor(seconds / 3600);
	minutes = Math.floor((seconds % 3600) / 60);

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isSelected = e.target.checked;
		if (isSelected) {
			setDevicesSelected([...devicesSelected, device]);
		} else {
			setDevicesSelected(
				devicesSelected.filter((d: Device) => d.id !== device.id)
			);
		}
	};

	return (
		<tr key={device.id} className="border-t">
			<td className="flex justify-center items-center gap-4 p-4 h-24">
				<input
					type="checkbox"
					name="devicesId"
					className="w-max h-max scale-150"
					onChange={handleSelect}
					checked={devicesSelected.includes(device)}
				/>
				<label htmlFor="devicesId" className="my-auto font-normal">
					Aire acondicionado {device.id}
				</label>
			</td>
			<td className="w-1/3 text-center p4">
				{hours}h {minutes}m
			</td>
		</tr>
	);
}
