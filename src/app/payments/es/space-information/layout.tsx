"use client";
import { useEffect } from "react";
import { UsePaymentContext } from "../../context/PaymentContext";

export default function SpaceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { setLangSwitchDisplay } = UsePaymentContext();
	useEffect(() => {
		setLangSwitchDisplay(false);
	});
	return <main className="h-full flex flex-col py-6">{children}</main>;
}
