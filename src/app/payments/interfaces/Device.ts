export interface Device {
	apartmentId: number;
	btu: number | null;
	buildingId: number;
	id: number;
	isActive: boolean;
	isOnline: boolean;
	key: string;
	lastDateConnection: Date;
	lockId: string | null;
	name: string;
	paidTime: number | null;
	pendingTime: number | null;
	pin: number | null;
	status: boolean;
	type: string;
}
