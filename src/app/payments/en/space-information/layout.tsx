"use client";
import { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";

export default function SpaceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { setLangSwitchDisplay, loading } = UsePaymentContext();
	useEffect(() => {
		setLangSwitchDisplay(false);
	});
	return (
		<section
			className={`h-full py-6 ${
				loading ? "hidden" : "modal-appear flex flex-col"
			}`}
		>
			{children}
		</section>
	);
}
