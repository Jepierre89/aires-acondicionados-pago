"use client";
import React from "react";
import { UsePaymentContext } from "../context/PaymentContext";
import Image from "next/image";
import LOADER from "@/assets/LOADER.gif";

export default function Loading() {
	const { loading } = UsePaymentContext();
	return (
		<div
			className={`absolute ${
				loading ? "modal-appear flex" : "modal-disappear hidden"
			}  bg-black/60 h-screen w-screen justify-center items-center`}
		>
			<Image
				src={LOADER}
				alt="..."
				height={200}
				width={200}
				className={` absolute ${loading ? "flex justify-center" : "hidden"} `}
			/>
		</div>
	);
}
