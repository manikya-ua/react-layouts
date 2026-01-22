export function LiveScore() {
	return (
		<div className="flex flex-col h-full">
			<div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
				<div className="h-6 w-24 bg-neutral-700 rounded"></div>
				<div className="flex gap-4">
					<div className="h-6 w-16 bg-neutral-800 rounded"></div>
					<div className="h-6 w-16 bg-neutral-800 rounded"></div>
					<div className="h-6 w-16 bg-neutral-800 rounded"></div>
					<div className="h-6 w-16 bg-neutral-800 rounded"></div>
					<div className="h-6 w-16 bg-neutral-800 rounded"></div>
				</div>
				<div className="flex-1"></div>
				<div className="h-8 w-8 bg-neutral-700 rounded"></div>
			</div>
			<div className="bg-neutral-800 p-4">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center justify-between text-white">
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 bg-neutral-600 rounded"></div>
							<div className="flex flex-col gap-1">
								<div className="h-5 w-20 bg-neutral-600 rounded"></div>
								<div className="h-8 w-32 bg-neutral-500 rounded"></div>
							</div>
						</div>
						<div className="text-center">
							<div className="h-4 w-16 bg-neutral-600 rounded mx-auto mb-2"></div>
							<div className="h-6 w-24 bg-red-500/30 rounded"></div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex flex-col gap-1 items-end">
								<div className="h-5 w-20 bg-neutral-600 rounded"></div>
								<div className="h-8 w-32 bg-neutral-500 rounded"></div>
							</div>
							<div className="h-12 w-12 bg-neutral-600 rounded"></div>
						</div>
					</div>
					<div className="h-5 w-72 bg-neutral-700 rounded mx-auto mt-4"></div>
				</div>
			</div>
			<div className="flex-1 flex overflow-auto">
				<div className="flex-1 p-4 flex flex-col gap-4">
					<div className="flex gap-2 border-b border-neutral-200 pb-2">
						<div className="h-8 w-24 bg-neutral-900 rounded"></div>
						<div className="h-8 w-24 bg-neutral-100 rounded"></div>
						<div className="h-8 w-24 bg-neutral-100 rounded"></div>
						<div className="h-8 w-24 bg-neutral-100 rounded"></div>
					</div>
					<div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
						<div className="h-10 bg-neutral-100 flex items-center px-4">
							<div className="w-48 h-4 bg-neutral-300 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-300 rounded"></div>
							<div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
						</div>
						<div className="h-12 flex items-center px-4 border-t border-neutral-100">
							<div className="w-48 h-4 bg-neutral-200 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
						</div>
						<div className="h-12 flex items-center px-4 border-t border-neutral-100">
							<div className="w-48 h-4 bg-neutral-200 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
						</div>
						<div className="h-12 flex items-center px-4 border-t border-neutral-100">
							<div className="w-48 h-4 bg-neutral-200 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
						</div>
						<div className="h-12 flex items-center px-4 border-t border-neutral-100">
							<div className="w-48 h-4 bg-neutral-200 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
						</div>
						<div className="h-12 flex items-center px-4 border-t border-neutral-100">
							<div className="w-48 h-4 bg-neutral-200 rounded"></div>
							<div className="flex-1"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
							<div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
						</div>
					</div>
				</div>
				<div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
					<div className="h-6 w-24 bg-neutral-200 rounded"></div>
					<div className="p-3 bg-neutral-100 rounded-lg">
						<div className="flex items-center gap-2 mb-2">
							<div className="h-5 w-12 bg-neutral-300 rounded"></div>
							<div className="h-4 w-4 bg-neutral-200 rounded"></div>
						</div>
						<div className="h-4 w-full bg-neutral-200 rounded"></div>
					</div>
					<div className="p-3 bg-neutral-100 rounded-lg">
						<div className="flex items-center gap-2 mb-2">
							<div className="h-5 w-12 bg-neutral-300 rounded"></div>
							<div className="h-4 w-4 bg-neutral-200 rounded"></div>
						</div>
						<div className="h-4 w-full bg-neutral-200 rounded"></div>
					</div>
					<div className="p-3 bg-neutral-100 rounded-lg">
						<div className="flex items-center gap-2 mb-2">
							<div className="h-5 w-12 bg-neutral-300 rounded"></div>
							<div className="h-4 w-4 bg-neutral-200 rounded"></div>
						</div>
						<div className="h-4 w-full bg-neutral-200 rounded"></div>
					</div>
					<div className="p-3 bg-neutral-100 rounded-lg">
						<div className="flex items-center gap-2 mb-2">
							<div className="h-5 w-12 bg-neutral-300 rounded"></div>
							<div className="h-4 w-4 bg-neutral-200 rounded"></div>
						</div>
						<div className="h-4 w-full bg-neutral-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
