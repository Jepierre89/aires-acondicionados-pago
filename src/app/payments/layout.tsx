"use client";
import Loading from "./components/Loading";
import { PaymentProvider } from "./context/PaymentContext";
import ToggleLang from "./components/ToggleLang";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<PaymentProvider>
			<ToggleLang />
			<main className="max-w-2xl flex flex-col items-center h-screen overflow-auto">
				{children}
			</main>
			<Loading />
		</PaymentProvider>
	);
}
