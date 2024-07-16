"use client";
import { PaymentProvider, UsePaymentContext } from "./context/PaymentContext";
import ToggleLang from "@/app/payments/components/ToggleLang";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<PaymentProvider>
			<ToggleLang />
			<body className="text-center items-center w-screen h-screen overflow-hidden">
				{children}
			</body>
		</PaymentProvider>
	);
}
