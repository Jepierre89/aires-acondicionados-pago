import React from "react";
import COINS from "@/assets/COINS-LOGO.png";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="w-full my-auto h-full items-start py-3 flex justify-center">
			<Image src={COINS} alt="..." width={110} height={70} />
		</footer>
	);
}
