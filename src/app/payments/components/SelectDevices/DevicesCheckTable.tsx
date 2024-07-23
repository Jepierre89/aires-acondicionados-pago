import { UsePaymentContext } from "../../context/PaymentContext";
import UseDevices from "../../hooks/UseDevices";
import DeviceCheckOption from "../SelectDevices/DeviceCheckOption";

export default function DevicesCheckTable() {
	const { devices }: { devices: any[] } = UseDevices();
	const { LangStrings } = UsePaymentContext();
	return (
		<table className="w-full">
			<thead>
				<tr>
					<th className="w-2/3 py-2">{LangStrings.GeneralMessages.device}</th>
					<th className="w-1/3 py-2">
						{LangStrings.GeneralMessages.remainTime}
					</th>
				</tr>
			</thead>
			<tbody className="overflow-hidden">
				<DeviceCheckOption devices={devices} />
			</tbody>
		</table>
	);
}
