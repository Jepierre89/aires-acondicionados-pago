import React, { useEffect } from "react";
import Button from "../CustomComponents/Button";

export default function ModalPregunta({
	activeModalPregunta,
	setActiveModalPregunta,
}: {
	activeModalPregunta: boolean;
	setActiveModalPregunta: Function;
}) {
	const [modalVisible, setModalVisible] = React.useState(false);

	useEffect(() => {
		if (activeModalPregunta) {
			setModalVisible(true);
		} else {
			setModalVisible(false);
		}
	}, [activeModalPregunta]);

	const closeModal = () => {
		setActiveModalPregunta(false);
	};

	return modalVisible ? (
		<div
			className={`fixed inset-0 flex items-center justify-center modal-appear bg-black bg-opacity-50 rounded-lg`}
		>
			<section className="relative max-w-80 bg-white shadow-lg rounded-lg">
				<header className="bg-secondary-700 h-10 rounded-t-lg"></header>

				<article className="px-4 text-center mb-9 mt-6">
					<p className="font-normal text-base">¿Salir del proceso de pago?</p>
				</article>
				<footer className="flex justify-around px-1 gap-10 my-9 mx-10">
					<Button text="Si" handleClick={closeModal} />
					<Button text="No" handleClick={closeModal} white />
				</footer>
			</section>
		</div>
	) : null;
}
