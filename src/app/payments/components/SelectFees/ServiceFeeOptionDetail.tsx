import React from "react";
import Option from "../../interfaces/Option";

export default function ServiceFeeOptionDetail({
	serviceFee,
	...props
}: {
	serviceFee: Option;
}) {
	let minutes = 0;
	let hours = 0;
	const seconds = serviceFee.duration || 0;
	hours = Math.floor(seconds / 3600);
	minutes = Math.floor((seconds % 3600) / 60);

	return (
		<option value={serviceFee.id}>
			{hours}h {minutes}m
		</option>
	);
}
