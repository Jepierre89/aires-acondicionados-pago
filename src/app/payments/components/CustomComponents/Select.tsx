import Image from "next/image";
import React, { useState, SelectHTMLAttributes, useRef } from "react";
import ARROW from "@/assets/SELECT-ARROW.svg";
import { UsePaymentContext } from "../../context/PaymentContext";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	children: React.ReactNode;
}

export default function Select({ children, ...props }: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLSelectElement>(null);

	const { LangStrings } = UsePaymentContext();

	const handleFocus = () => setIsOpen(true);
	const handleBlur = () => setIsOpen(false);
	const handleClick = () => setIsOpen((prev) => !prev);

	return (
		<div className="relative w-80 h-12">
			<select
				{...props}
				ref={selectRef}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onClick={handleClick}
				className={`appearance-none bg-gray-50 border border-gray-300 text-neutral-600 text-sm rounded-lg focus:border-neutral-500 w-full p-2.5 h-full pr-10 ${props.className}`}
			>
				{children}
				<option value={-1}>{LangStrings.GeneralMessages.select}</option>
			</select>

			<Image
				src={ARROW}
				alt="Arrow Icon"
				className={`absolute z-10 right-3 top-1/2 transform -translate-y-1/2 transition-transform ${
					isOpen ? "rotate-180" : "rotate-0"
				}`}
			/>
		</div>
	);
}
