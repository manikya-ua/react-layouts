export function EcommercePDP() {
	return (
		<div className="flex flex-col h-full">
			<div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
				<div className="h-8 w-24 bg-neutral-700 rounded"></div>
				<div className="flex-1 max-w-2xl h-10 bg-neutral-800 rounded"></div>
				<div className="flex gap-4">
					<div className="h-8 w-8 bg-neutral-700 rounded"></div>
					<div className="h-8 w-8 bg-neutral-700 rounded"></div>
				</div>
			</div>
			<div className="flex-1 flex overflow-auto">
				<div className="w-1/2 p-6 flex gap-4">
					<div className="w-20 flex flex-col gap-2">
						<div className="h-20 bg-neutral-200 rounded border-2 border-neutral-900"></div>
						<div className="h-20 bg-neutral-200 rounded "></div>
						<div className="h-20 bg-neutral-200 rounded "></div>
						<div className="h-20 bg-neutral-200 rounded "></div>
					</div>
					<div className="flex-1 bg-neutral-100 rounded-lg"></div>
				</div>
				<div className="w-1/2 p-6 flex flex-col gap-4 border-l border-neutral-200">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-8 w-full bg-neutral-200 rounded"></div>
					<div className="h-6 w-48 bg-neutral-100 rounded"></div>
					<div className="h-px bg-neutral-200"></div>
					<div className="h-10 w-32 bg-neutral-300 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
					<div className="h-px bg-neutral-200"></div>
					<div className="flex flex-col gap-2">
						<div className="h-5 w-16 bg-neutral-200 rounded"></div>
						<div className="flex gap-2">
							<div className="h-10 w-10 rounded border-2 border-neutral-900 bg-neutral-200"></div>
							<div className="h-10 w-10 rounded bg-neutral-100"></div>
							<div className="h-10 w-10 rounded bg-neutral-100"></div>
							<div className="h-10 w-10 rounded bg-neutral-100"></div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="h-5 w-12 bg-neutral-200 rounded"></div>
						<div className="flex gap-2">
							<div className="h-10 w-12 rounded flex items-center justify-center text-sm border border-neutral-300"></div>
							<div className="h-10 w-12 rounded flex items-center justify-center text-sm border-2 border-neutral-900"></div>
							<div className="h-10 w-12 rounded flex items-center justify-center text-sm border border-neutral-300"></div>
							<div className="h-10 w-12 rounded flex items-center justify-center text-sm border border-neutral-300"></div>
						</div>
					</div>
					<div className="flex gap-3 mt-4">
						<div className="h-12 flex-1 bg-neutral-900 rounded"></div>
						<div className="h-12 w-12 bg-neutral-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
