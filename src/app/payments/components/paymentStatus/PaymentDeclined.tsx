import Image from "next/image";
import React from "react";
import DECLINED from "@/assets/DECLINED.svg";

export default function PaymentDeclined() {
	return (
		<header className="flex flex-col justify-center items-center my-auto">
			<h1 className="font-bold text-secondary-700 text-2xl">Resumen de pago</h1>
			<Image src={DECLINED} width={62} alt="..." />
			<h2 className="font-bold text-xl text-center">Transaccion declinada</h2>
			<sub className="font-normal text-base text-center max-w-xl">
				La transacción no pudo ser completada. Por favor, verifica el estado de
				tu cuenta o intenta nuevamente más tarde. Si el problema persiste,
				contacta a tu banco para obtener más información.
			</sub>
		</header>
	);
}
