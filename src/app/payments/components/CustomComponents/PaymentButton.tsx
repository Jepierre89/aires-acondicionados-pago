import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import UseReferences from "../../hooks/UseReferences";
import axios from "axios";

const PaymentButton = ({ signature }: { signature: string }) => {
	const context = UsePaymentContext();

	const postPrueba = async () => {
		axios.post("http://localhost:5048/process-of-pays", {
			totalValue: 100000,
			date: new Date(),
			status: "prueba",
		});
	};

	useEffect(() => {
		const container = document.getElementById("wompi-button-container");

		if (!container) {
			console.error("Wompi button container not found");
			return;
		}

		container.innerHTML = "";

		// Verifica si el script ya está presente
		if (document.getElementById("wompi-script")) {
			console.log("Wompi script already loaded");
			return;
		}

		const script = document.createElement("script");
		script.id = "wompi-script";
		script.src = "https://checkout.wompi.co/widget.js";
		script.async = true;
		script.setAttribute("data-render", "button");
		script.setAttribute(
			"data-public-key",
			`${process.env.NEXT_PUBLIC_WOMPI_PUBKEY}`
		);
		script.setAttribute("data-currency", "COP");
		script.setAttribute("data-amount-in-cents", `${context.totalPrice * 100}`);
		script.setAttribute("data-reference", context.reference);
		script.setAttribute("data-signature:integrity", signature);
		script.setAttribute(
			"data-redirect-url",
			`${process.env.NEXT_PUBLIC_CLIENT_URL}/payments/${context.lang}/payment-finished`
		);

		script.addEventListener("load", () => {
			console.log("Wompi script loaded successfully");
			window.addEventListener("message", handleWompiMessage);
		});

		script.addEventListener("error", (error) => {
			console.error("Error loading Wompi script:", error);
		});

		container.appendChild(script);

		return () => {
			window.removeEventListener("message", handleWompiMessage);
			const existingScript = document.getElementById("wompi-script");
			if (existingScript) {
				container.removeChild(existingScript);
			} else {
				const form = document.getElementById("wompi-button-container");
				if (form) {
					form.innerHTML = "";
				}
			}
		};
	}, [context.totalPrice, context.reference, signature, context.lang]);

	const handleWompiMessage = (event: any) => {
		if (event.origin !== "https://checkout.wompi.co") return;

		const { event: wompiEvent, data } = event.data;

		if (wompiEvent === "wompi.checkout.**EVENT_NAME**") {
			console.log("Wompi event received:", data);
		}
	};

	return <form id="wompi-button-container"></form>;
};

export default PaymentButton;
