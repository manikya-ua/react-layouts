export function Calendar() {
	return (
		<div className="flex h-full">
			<div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-4">
				<div className="h-10 w-28 bg-neutral-900 rounded"></div>
				<div className="grid grid-cols-7 gap-1 text-center text-xs">
					<div className="h-6 flex items-center justify-center text-neutral-500">
						S
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						M
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						T
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						W
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						T
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						F
					</div>
					<div className="h-6 flex items-center justify-center text-neutral-500">
						S
					</div>
					{Array(35)
						.fill(0)
						.map((_, idx) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: Index is the actual data
								key={idx}
								className={`h-6 flex items-center justify-center rounded-full text-xs ${idx === 15 && "bg-neutral-900 text-white"}`}
							>
								{((idx + 1) % 31) + 1}
							</div>
						))}
				</div>
				<div className="h-px bg-neutral-200"></div>
				<div className="flex flex-col gap-2">
					<div className="h-4 w-20 bg-neutral-200 rounded"></div>
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 bg-neutral-400 rounded"></div>
						<div className="h-4 flex-1 bg-neutral-100 rounded"></div>
					</div>
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 bg-neutral-400 rounded"></div>
						<div className="h-4 flex-1 bg-neutral-100 rounded"></div>
					</div>
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 bg-neutral-400 rounded"></div>
						<div className="h-4 flex-1 bg-neutral-100 rounded"></div>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col">
				<div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-4">
					<div className="h-8 w-8 bg-neutral-200 rounded"></div>
					<div className="h-8 w-8 bg-neutral-200 rounded"></div>
					<div className="h-6 w-32 bg-neutral-200 rounded"></div>
					<div className="flex-1"></div>
					<div className="flex bg-neutral-100 rounded p-1 gap-1">
						<div className="h-7 w-16 bg-white rounded shadow-sm"></div>
						<div className="h-7 w-16 rounded"></div>
						<div className="h-7 w-16 rounded"></div>
					</div>
				</div>
				<div className="flex-1 flex">
					<div className="w-16 border-r border-neutral-200 flex flex-col">
						{Array(12)
							.fill(null)
							.map((_, idx) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: index is the data
									key={idx}
									className="flex-1 border-b border-neutral-100 flex items-start justify-end pr-2 pt-1"
								>
									<span className="text-xs text-neutral-400">{idx + 8}:00</span>
								</div>
							))}
					</div>
					<div className="flex-1 flex">
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Mon</span>
								<span className="text-sm ">15</span>
							</div>
							<div className="flex-1 relative"></div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Tue</span>
								<span className="text-sm ">16</span>
							</div>
							<div className="flex-1 relative">
								<div className="absolute left-1 right-1 top-8 h-16 bg-neutral-200 rounded text-xs p-1"></div>
							</div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Wed</span>
								<span className="text-sm bg-neutral-900 text-white w-6 h-6 rounded-full flex items-center justify-center">
									17
								</span>
							</div>
							<div className="flex-1 relative">
								<div className="absolute left-1 right-1 top-24 h-12 bg-neutral-800 rounded text-xs p-1"></div>
							</div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Thu</span>
								<span className="text-sm ">18</span>
							</div>
							<div className="flex-1 relative"></div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Fri</span>
								<span className="text-sm ">19</span>
							</div>
							<div className="flex-1 relative">
								<div className="absolute left-1 right-1 top-4 h-20 bg-neutral-300 rounded text-xs p-1"></div>
							</div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Sat</span>
								<span className="text-sm ">20</span>
							</div>
							<div className="flex-1 relative"></div>
						</div>
						<div className="flex-1 border-r border-neutral-200 flex flex-col">
							<div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
								<span className="text-xs text-neutral-500">Sun</span>
								<span className="text-sm ">21</span>
							</div>
							<div className="flex-1 relative"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
