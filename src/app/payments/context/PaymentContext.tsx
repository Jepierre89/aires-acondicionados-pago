"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Device } from "../interfaces/Device";
import Option from "../interfaces/Option";
import { useRouter } from "next/navigation";
import langDictionary from "@/app/config/lang.json";
import { Lang } from "../interfaces/Lang";

interface PaymentContextType {
	apartmentId: number;
	setApartmentId: (id: number) => void;
	buildingId: number;
	setBuildingId: (id: number) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
	devicesSelected: Device[];
	setDevicesSelected: any;
	totalPrice: number;
	setTotalPrice: (price: number) => void;
	totalTime: string;
	setTotalTime: (time: string) => void;
	serviceFeesSelected: Option[];
	setServiceFeesSelected: any;
	setLang: (language: string) => void;
	lang: string;
	LangStrings: Lang;
	langSwitchDisplay: boolean;
	setLangSwitchDisplay: (display: boolean) => void;
}

const PaymentContex = createContext<PaymentContextType | undefined>(undefined);

export const UsePaymentContext = () => {
	const context = useContext(PaymentContex);
	if (!context) {
		throw new Error("PaymentContext must be used within a PaymentProvider");
	}
	return context;
};

export const PaymentProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [apartmentId, setApartmentId] = useState(9);
	const [buildingId, setBuildingId] = useState(3);
	const [loading, setLoading] = useState(false);
	const [devicesSelected, setDevicesSelected] = useState([]);
	const [serviceFeesSelected, setServiceFeesSelected] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalTime, setTotalTime] = useState("0h 0m");
	const [lang, setLang] = useState("es");
	const [langSwitchDisplay, setLangSwitchDisplay] = useState(true);

	const router = useRouter();

	useEffect(() => {
		if (buildingId === -1 || apartmentId === -1) {
			router.push(`/payments/${lang}`);
		}
	}, [router, lang, apartmentId, buildingId]);

	function getLangStrings(lang: string): Lang {
		return langDictionary[lang as keyof typeof langDictionary] as Lang;
	}

	const LangStrings: Lang = getLangStrings(lang);

	return (
		<PaymentContex.Provider
			value={{
				apartmentId,
				setApartmentId,
				buildingId,
				setBuildingId,
				loading,
				setLoading,
				devicesSelected,
				setDevicesSelected,
				totalPrice,
				setTotalPrice,
				totalTime,
				setTotalTime,
				serviceFeesSelected,
				setServiceFeesSelected,
				setLang,
				lang,
				LangStrings,
				langSwitchDisplay,
				setLangSwitchDisplay,
			}}
		>
			{children}
		</PaymentContex.Provider>
	);
};
