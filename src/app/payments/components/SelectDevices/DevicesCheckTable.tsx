import UseDevices from "../../hooks/UseDevices";
import DeviceCheckOption from "../SelectDevices/DeviceCheckOption";

export default function DevicesCheckBok() {
	const { devices }: { devices: any[] } = UseDevices();
	return (
		<table className="w-full">
			<thead>
				<tr>
					<th className="w-2/3">Dispositivo</th>
					<th className="w-1/3">Tiempo disponible</th>
				</tr>
			</thead>
			<tbody>
				<DeviceCheckOption devices={devices} />
			</tbody>
		</table>
	);
}
