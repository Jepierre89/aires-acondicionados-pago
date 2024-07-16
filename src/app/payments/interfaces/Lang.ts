export interface Lang {
	GeneralMessages: GeneralMessages;
	PickApartmentView: PickApartmentView;
	SpaceInformation: SpaceInformation;
	PickTimeToCharge: PickTimeToCharge;
	Summary: Summary;
	FinalPaymentSummary: FinalPaymentSummary;
	ModalMessages: ModalMessages;
}
interface ModalMessages {
	currentSpace: string;
	strongErrorMessage: string;
	pickAnother: string;
}

interface GeneralMessages {
	ubication: string;
	apartmentOrRoom: string;
	continue: string;
	return: string;
	returnToStart: string;
	accommodation: string;
	device: string;
	remainTime: string;
	air: string;
	select: string;
}

interface PickApartmentView {
	hello: string;
	welcomeMessage: string;
	informationMessage1: string;
	informationMessage2: string;
	pickYourLocation: string;
	pickTheNumber: string;
}

interface SpaceInformation {
	pickDeviceToCharge: string;
}

interface PickTimeToCharge {
	TimeOptions: string;
	informationMessage1: string;
	reminder: string;
	reminderInformation1: string;
	reminderInformation2: string;
	pickUseTime: string;
}

interface Summary {
	paymentSummary: string;
	selectedDevices: string;
	timeToUsePerDevice: string;
	totalPayment: string;
}

interface FinalPaymentSummary {
	paymentSummary: string;
	successfullyPayment: string;
	informationMessage1: string;
	enjoy: string;
	getMoreTime: string;
}
