import React, { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";
import UseReferences from "../../hooks/UseReferences";

const PaymentButton = ({ signature }: { signature: string }) => {
	const context = UsePaymentContext();

	useEffect(() => {
		const container = document.getElementById("wompi-button-container");

		if (!container) {
			console.error("Wompi button container not found");
			return;
		}

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
			`https://7e59bc54a16f426e573b36574cd4d786.serveo.net/payments/es/payment-finished`
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
			}
		};
	}, [context.totalPrice, context.reference, signature]);

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
