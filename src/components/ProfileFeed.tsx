import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function ProfileFeed() {
	return (
		<Flex direction="flex-col" className="flex-1 bg-neutral-100">
			<Flex
				height={3.5}
				gap={1}
				className="bg-white border-b border-neutral-200 items-center px-6"
			>
				<Box height={2} width={2} color="900"></Box>
				<Box height={2.5} width={16} borderRadius={999} color="100"></Box>
				<div className="flex-1"></div>
				<Flex gap={1}>
					<Box height={2} width={2} color="200"></Box>
					<Box height={2} width={2} color="200"></Box>
					<Box height={2} width={2} color="200"></Box>
					<Box height={2} width={2} color="200"></Box>
				</Flex>
				<Box height={2} width={2} color="300" borderRadius={999}></Box>
			</Flex>
			<div className="flex-1 overflow-auto">
				<div className="max-w-4xl mx-auto py-4 flex gap-4">
					<div className="flex-1 flex flex-col gap-4">
						<div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
							<div className="h-32 bg-neutral-300"></div>
							<div className="p-4 relative">
								<div className="h-24 w-24 bg-neutral-200 rounded-full border-4 border-white absolute -top-12"></div>
								<div className="ml-28 flex flex-col gap-2">
									<div className="h-6 w-48 bg-neutral-200 rounded"></div>
									<div className="h-4 w-64 bg-neutral-100 rounded"></div>
								</div>
								<div className="flex gap-2 mt-4">
									<div className="h-8 w-28 bg-neutral-900 rounded"></div>
									<div className="h-8 w-28 bg-neutral-100 rounded border border-neutral-300"></div>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-xl border border-neutral-200 p-4">
							<div className="h-5 w-20 bg-neutral-200 rounded mb-3"></div>
							<div className="h-4 w-full bg-neutral-100 rounded"></div>
							<div className="h-4 w-3/4 bg-neutral-100 rounded mt-2"></div>
						</div>
						<div className="bg-white rounded-xl border border-neutral-200 p-4">
							<div className="h-5 w-24 bg-neutral-200 rounded mb-3"></div>
							<div className="flex gap-4">
								<div className="h-12 w-12 bg-neutral-200 rounded"></div>
								<div className="flex-1 flex flex-col gap-1">
									<div className="h-4 w-48 bg-neutral-200 rounded"></div>
									<div className="h-3 w-32 bg-neutral-100 rounded"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-72 flex flex-col gap-4">
						<div className="bg-white rounded-xl border border-neutral-200 p-4">
							<div className="h-5 w-32 bg-neutral-200 rounded mb-3"></div>
							<div className="flex gap-2 py-2">
								<div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
								<div className="flex-1 flex flex-col gap-1">
									<div className="h-3 w-full bg-neutral-100 rounded"></div>
									<div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
								</div>
							</div>
							<div className="flex gap-2 py-2">
								<div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
								<div className="flex-1 flex flex-col gap-1">
									<div className="h-3 w-full bg-neutral-100 rounded"></div>
									<div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
								</div>
							</div>
							<div className="flex gap-2 py-2">
								<div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
								<div className="flex-1 flex flex-col gap-1">
									<div className="h-3 w-full bg-neutral-100 rounded"></div>
									<div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-xl border border-neutral-200 p-4">
							<div className="h-5 w-24 bg-neutral-200 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</Flex>
	);
}
