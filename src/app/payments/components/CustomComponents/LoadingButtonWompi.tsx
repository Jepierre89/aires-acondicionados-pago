import React from "react";

export default function LoadingButtonWompi({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="disappear flex items-center justify-center h-10">
			<div className="spinner-border text-primary-300 " role="status">
				<span className="sr-only">Loading...</span>
			</div>
			{children}
		</div>
	);
}
