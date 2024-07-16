import React from "react";
import FWD from "@/assets/FWS-ARROW.svg";
import BKW from "@/assets/BKW-ARROW.svg";
import Image from "next/image";

export default function Button({
	text,
	handleClick,
	forward,
	backward,
	white,
}: {
	text: string;
	handleClick: Function;
	forward?: boolean;
	backward?: boolean;
	white?: boolean;
}) {
	return (
		<button
			onClick={() => handleClick()}
			className={`${
				white
					? "bg-white hover:bg-neutral-100 border-2 border-secondary-500 text-black"
					: "bg-primary-300 hover:bg-primary-100"
			} drop-shadow-lg px-2 py-1 rounded-lg items-center h-11 w-80`}
		>
			<div className="flex justify-center">
				{backward && <Image src={BKW} alt="Backward" width={24} />}
				<span
					className={`${
						white ? "text-black" : "text-white"
					} font-bold text-base`}
				>
					{text}
				</span>
				{forward && <Image src={FWD} alt="Forward" width={24} />}
			</div>
		</button>
	);
}
