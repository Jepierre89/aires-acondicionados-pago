import React from "react";
import { UsePaymentContext } from "../context/PaymentContext";
type Props = {};

export default function RadioLang({}: Props) {
	const { setLang, lang, langSwitchDisplay, loading } = UsePaymentContext();
	const handleChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.checked) {
			setLang("es");
		} else {
			setLang("en");
		}
	};
	return (
		<section
			className={`items-center flex-col gap-2 my-3 ${loading ? "hidden" : ""}`}
			style={{
				display: langSwitchDisplay ? "flex" : "none",
			}}
		>
			<header className={`${loading ? "hidden" : ""}`}>
				<label className="text-xs font-normal">
					{lang === "es" ? "Selecciona tu idioma" : "Choice your lang"}
				</label>
			</header>
			<div
				className={`flex items-center justify-center gap-4 ${
					loading ? "hidden" : ""
				}`}
			>
				<label htmlFor="ch-toggle" className="font-normal text-xs">
					ES
				</label>
				<input
					id="cb-toggle"
					type="checkbox"
					className="hide-me my-auto hidden"
					aria-labelledby="cb-label"
					onChange={handleChangeLang}
				/>
				<label htmlFor="cb-toggle" className="toggle my-auto"></label>
				<label htmlFor="ch-toggle" className="font-normal text-xs">
					EN
				</label>
			</div>
		</section>
	);
}
