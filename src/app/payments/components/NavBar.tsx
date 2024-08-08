import React from "react";
import { UsePaymentContext } from "../context/PaymentContext";
import NavButton from "./CustomComponents/NavButton";
type Props = {};

export default function NavBar({}: Props) {
	const { loading, langSwitchDisplay, LangStrings, navDisplay } =
		UsePaymentContext();

	//TODO: REVISAR EL RESPONSIVE DEL NAVBAR

	return (
		<nav
			className={`gap-2 my-4 px-6 ${
				loading ? "hidden" : "modal-appear"
			} w-full top-0`}
			style={{
				display:
					!langSwitchDisplay && navDisplay
						? "flex"
						: !navDisplay
						? "none"
						: "none",
			}}
		>
			<ul className={`flex justify-between w-full ${loading && "hidden"}`}>
				<li>
					<NavButton back />
				</li>
				<li>
					<NavButton cancel />
				</li>
			</ul>
		</nav>
	);
}
