export interface serviceInformation {
	buildingSelected: BuildingSelected;
	devicesSelected: Array<DevicesSelected[]>;
	servicesFeeSelected: ServicesFeeSelected[];
}

export interface BuildingSelected {
	address: string;
	clientId: string;
	clientSecret: string;
	description: string;
	holdingId: number;
	id: number;
	name: string;
	password: string;
	state: boolean;
	staysId: null;
	urlImage: string;
	username: string;
}

export interface DevicesSelected {
	apartmentId: number;
	btu: null;
	buildingId: number;
	id: number;
	isActive: boolean;
	isOnline: boolean;
	key: string;
	lastDateConnection: string;
	lockId: string | null;
	name: string;
	paidTime: null;
	pendingTime: null;
	pin: number | null;
	status: boolean;
	type: string;
}

export interface ServicesFeeSelected {
	devicesId: number;
	duration: number;
	id: number;
	value: number;
}
