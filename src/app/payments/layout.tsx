"use client";
import Loading from "./components/Loading";
import { PaymentProvider, UsePaymentContext } from "./context/PaymentContext";
import ToggleLang from "./components/ToggleLang";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { loading } = UsePaymentContext();
	return (
		<>
			<ToggleLang />
			<main
				className={`flex flex-col items-center justify-center sm:w-full sm:max-w-4xl max-w-xs overflow-x-hidden h-full`}
			>
				{children}
			</main>
			<Loading />
		</>
	);
}
