"use client";
import { PaymentProvider } from "./context/PaymentContext";
import ToggleLang from "@/app/payments/components/ToggleLang";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<PaymentProvider>
			<ToggleLang />
			<main className="h-screen max-w-sm px-7">{children}</main>
		</PaymentProvider>
	);
}
