import Image from "next/image";
import React from "react";
import CHECK from "@/assets/CHECK-MARK.png";

export default function PaymentSuccess() {
	return (
		<header className="flex flex-col justify-center items-center my-auto">
			<h1 className="font-bold text-secondary-700 text-2xl">Resumen de pago</h1>
			<Image src={CHECK} width={62} alt="..." />
			<h2 className="font-bold text-xl text-center">
				Pago realizado <br /> exitosamente
			</h2>
			<sub className="font-normal text-base text-center">
				Has recargado el tiempo de uso de los aires acondicionados de tu
				espacio.
			</sub>
		</header>
	);
}
