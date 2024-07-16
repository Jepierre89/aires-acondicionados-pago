export default interface Apartment {
	address: string;
	buildingId: number;
	description: string | null;
	id: number;
	isActive: boolean;
	name: string;
	state: boolean;
	staysId: number | null;
	useDigitCode: boolean;
	useQRCode: boolean;
}
