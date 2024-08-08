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
				className={`flex flex-col items-center h-screen justify-center sm:w-full sm:max-w-4xl max-w-xs my-auto`}
			>
				{children}
			</main>
			<Loading />
		</>
	);
}
