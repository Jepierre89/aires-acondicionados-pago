import React, { useState } from "react";
import UseBuildings from "../../hooks/UseBuildings";
import Apartment from "../../interfaces/Apartment";
import { UsePaymentContext } from "../../context/PaymentContext";
import Select from "../CustomComponents/Select";

export default function BuildingSelect() {
	const { buildings, loading } = UseBuildings();
	const { setBuildingId, buildingId, setDevicesSelected, setApartmentId } =
		UsePaymentContext();

	return (
		<Select
			name="buildingId"
			id=""
			value={buildingId}
			onChange={(e) => {
				setBuildingId(Number(e.target.value));
				setDevicesSelected([]);
				setApartmentId(-1);
			}}
		>
			{buildings &&
				buildings.map((data: Apartment) => (
					<option value={data.id} key={data.id}>
						{data.name}
					</option>
				))}
		</Select>
	);
}
