import React, { MouseEventHandler } from "react";
import FWD from "@/assets/FWS-ARROW.svg";
import BKW from "@/assets/BKW-ARROW.svg";
import Image from "next/image";
import ArrowIcon from "@/app/payments/components/Svg/FWS-ARROW";

export default function Button({
	text,
	handleClick,
	forward,
	backward,
	white,
	transparent,
	textBlack,
	disabled,
}: {
	text: string;
	handleClick: MouseEventHandler<HTMLButtonElement>;
	forward?: boolean;
	backward?: boolean;
	white?: boolean;
	transparent?: boolean;
	textBlack?: boolean;
	disabled?: boolean;
}) {
	return (
		<button
			onClick={handleClick}
			className={`${textBlack ? "text-black" : ""} ${
				white
					? "bg-white hover:bg-neutral-100 border-2 border-secondary-500"
					: transparent
					? "bg-transparent border-0"
					: disabled
					? "bg-neutral-200"
					: "bg-primary-300 hover:bg-primary-100"
			} drop-shadow-lg px-2 py-1 rounded-lg items-center h-11 w-80`}
			disabled={disabled}
		>
			<div className="flex justify-center">
				{backward && <Image src={BKW} alt="Backward" width={24} />}
				<span
					className={`${
						textBlack
							? "text-black"
							: disabled
							? "text-neutral-600"
							: "text-white"
					} font-bold text-base`}
				>
					{text}
				</span>
				{forward && (
					<ArrowIcon color={disabled ? "gray" : "white"} width="24" />
				)}
				{/* {forward && <Image src={FWD} alt="Forward" width={24} />} */}
			</div>
		</button>
	);
}
