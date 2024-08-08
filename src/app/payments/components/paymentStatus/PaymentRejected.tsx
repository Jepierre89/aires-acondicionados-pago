import Image from "next/image";
import React from "react";
import REJECTED from "@/assets/DECLINED.svg";

export default function PaymentRejected() {
	return (
		<header className="flex flex-col justify-center items-center my-auto">
			<h1 className="font-bold text-secondary-700 text-2xl">Resumen de pago</h1>
			<Image src={REJECTED} width={62} alt="..." />
			<h2 className="font-bold text-xl text-center">Pago rechazado</h2>
			<sub className="font-normal text-base text-center max-w-xl">
				Esta transacción no ha podido ser completada, verifica el estado de tu
				cuenta o contacta a tu banco.
			</sub>
		</header>
	);
}
