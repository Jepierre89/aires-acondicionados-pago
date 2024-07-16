import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseBuildings() {
	const [buildings, setBuildings] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const response: any = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/buildings`
				);
				setBuildings(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return { buildings, loading };
}
