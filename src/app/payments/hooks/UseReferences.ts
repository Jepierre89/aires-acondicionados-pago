import { useEffect, useRef, useState } from "react";
import * as crypto from "crypto-js";
import axios from "axios";

export default function UseReferences() {
	//TODO Arreglar re renderizado de boton
	const [reference, setReference] = useState("");
	useEffect(() => {
		const generateRandomHex = async () => {
			const bytes = crypto.lib.WordArray.random(14 / 2);
			const hex = bytes.toString(crypto.enc.Hex);
			return hex;
		};
		const getData = async () => {
			try {
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/process-of-pays`
				);
				return response.data || [];
			} catch (error) {
				console.error(error);
			}
		};

		const generateRandomHexOnly = async () => {
			const payments: any[] = await getData();
			let newReference = "";

			while (newReference === "") {
				const randomHex = await generateRandomHex();
				if (!payments.find((x) => x.reference === randomHex)) {
					newReference = randomHex;
				}
			}

			setReference(newReference);
		};
		generateRandomHexOnly();
		return () => {
			setReference("");
			console.log(reference);
		};
	}, []);

	return { reference };
}
