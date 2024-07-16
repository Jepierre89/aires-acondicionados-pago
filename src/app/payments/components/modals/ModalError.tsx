import React, { useEffect } from "react";
import Button from "../CustomComponents/Button";
import { UsePaymentContext } from "../../context/PaymentContext";

export default function ModalError({
	activeModalError,
	setActiveModalError,
}: {
	activeModalError: boolean;
	setActiveModalError: Function;
}) {
	const [modalVisible, setModalVisible] = React.useState(false);
	const { LangStrings } = UsePaymentContext();

	useEffect(() => {
		if (activeModalError) {
			setModalVisible(true);
		} else {
			setModalVisible(false);
		}
	}, [activeModalError]);

	const closeModal = () => {
		setActiveModalError(false);
	};

	return modalVisible ? (
		<div
			className={`fixed inset-0 flex items-center justify-center modal-appear bg-black bg-opacity-50 rounded-lg z-20`}
		>
			<section className="relative max-w-80 bg-white shadow-lg rounded-lg h-min">
				<header className="bg-secondary-700 h-10 rounded-t-lg"></header>

				<article className="px-4 py-2">
					<p>
						{LangStrings.ModalMessages.currentSpace}{" "}
						<strong>{LangStrings.ModalMessages.strongErrorMessage}</strong>
					</p>
					<br />
					<p>{LangStrings.ModalMessages.pickAnother}</p>
				</article>
				<footer className="flex justify-center px-1 mx-10 mt-2 mb-4">
					<Button text="Aceptar" handleClick={closeModal} />
				</footer>
			</section>
		</div>
	) : null;
}
