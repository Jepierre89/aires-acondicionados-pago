import React from "react";
import COINS from "@/assets/COINS-LOGO.png";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="w-full flex justify-center h-1/6">
			<picture className="my-auto">
				<Image src={COINS} alt="..." width={110} height={70} />
			</picture>
		</footer>
	);
}
