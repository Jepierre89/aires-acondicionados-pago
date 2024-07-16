import React, { useEffect } from "react";
import UseApartments from "../../hooks/UseApartments";
import Apartment from "../../interfaces/Apartment";
import { UsePaymentContext } from "../../context/PaymentContext";
import Select from "../CustomComponents/Select";

export default function ApartmentSelect() {
	const { apartments, loading, setError: setApartmentError } = UseApartments();
	const { apartmentId, setApartmentId, buildingId } = UsePaymentContext();

	useEffect(() => {
		setApartmentId(-1);
	}, [setApartmentId, buildingId]);

	return (
		<Select
			disabled={buildingId == -1 ? true : false}
			value={apartmentId}
			onClick={() => {
				setApartmentError([]);
			}}
			onChange={(e) => {
				setApartmentId(Number(e.target.value));
				setApartmentError([]);
			}}
		>
			{apartments &&
				apartments.map((data: Apartment) => (
					<option value={data.id} key={data.id}>
						{data.name}
					</option>
				))}
		</Select>
	);
}
