import React from "react";
import type { Device as DeviceType } from "../../interfaces/Device";
import DeviceOption from "./DeviceOption";
export default function DeviceCheckOption({
	devices,
}: {
	devices: DeviceType[];
}) {
	return (
		devices &&
		devices.map((device) => {
			return <DeviceOption device={device} key={device.id} />;
		})
	);
}
