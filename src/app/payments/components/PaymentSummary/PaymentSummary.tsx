import React from "react";
import { UsePaymentContext } from "../../context/PaymentContext";

export default function PaymentSummary() {
	const context = UsePaymentContext();
	return (
		<>
			<header>
				<h1 className="font-bold text-secondary-700 text-2xl text-center">
					Resumen de compra
				</h1>
			</header>
			<section className="border-2 border-primary-300 flex flex-col items-center py-4">
				<h2 className="font-normal text-lg">Ubicacion:</h2>
				<article>
					<h3 className="text-3xl text-secondary-700">{context.buildingId}</h3>
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article>
					<h2 className="text-lg">Dispositivos seleccionados: </h2>
					<div className="flex flex-wrap justify-center">
						{context.devicesSelected.map((device, index) => (
							<React.Fragment key={device.id}>
								<h3 className="text-3xl text-secondary-700">
									Aire {device.id}
								</h3>
								{index !== context.devicesSelected.length - 1 && (
									<span className="text-black flex justify-center items-center mx-2 text-3xl">
										{" "}
										-{" "}
									</span>
								)}
							</React.Fragment>
						))}
					</div>
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article className="text-center">
					<h2 className="text-lg">Tiempo de uso para cada uno: </h2>
					{context.serviceFeesSelected.map((fees) => (
						<h3 key={fees.id} className="text-3xl text-secondary-700">
							{fees.duration} ({fees.devicesId})
						</h3>
					))}
				</article>
				<hr className="border-[0.5px] w-4/5 border-solid border-neutral-200 my-4" />
				<article className="text-center">
					<h2 className="text-lg">Valor a pagar: </h2>
					<h3 className="text-3xl text-secondary-700">${context.totalPrice}</h3>
				</article>
			</section>
		</>
	);
}
