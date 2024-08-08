"use client";
import { useEffect, useState } from "react";
import { UsePaymentContext } from "../context/PaymentContext";
import * as CryptoJS from "crypto-js";

export default function UseIntegritySignature() {
	const [signature, setSignature] = useState("");
	const context = UsePaymentContext();
	useEffect(() => {
		const encryptSignature = async () => {
			const data = `${context.reference}${context.totalPrice}00COP${process.env.NEXT_PUBLIC_WOMPI_SIGNATUREKEY}`;
			const hashedValue = CryptoJS.SHA256(data).toString();
			setSignature(hashedValue);
			// const cadena = `${context.reference}${context.totalPrice * 100}COP${
			// 	process.env.NEXT_PUBLIC_WOMPI_SIGNATUREKEY
			// }`;
			// const hash = new TextEncoder().encode(cadena);
			// console.log("------------HASH-----------");
			// console.log(hash);
			// const buffer = await crypto.subtle.digest("SHA-256", hash);
			// console.log("------------buffer-----------");
			// console.log(buffer, "BUFFFFFFER");
			// const hashArray = Array.from(new Uint8Array(buffer));
			// const hashHex = hashArray
			// 	.map((b: number) => b.toString(16).padStart(2, "0"))
			// 	.join("");
			// setSignature(hashHex);
			// const hash = await CryptoJS.HmacSHA256("256", cadena);
			// const hashString = hash.toString();
			// setSignature(hashString);
		};
		encryptSignature();
	}, [context.reference, context.totalPrice]);

	return { signature };
}
