import React from "react";
import COINS from "@/assets/COINS-LOGO.png";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="w-full flex items-center py-3 relative mx-auto h-32 sm:h-48">
			<Image
				src={COINS}
				alt="..."
				width={110}
				height={70}
				className="mx-auto sm:w-40"
			/>
		</footer>
	);
}
