import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function DashboardKPI() {
	return (
		<Flex className="flex-1">
			<SideNav />
			<Flex direction="flex-col" className="flex-1">
				<Flex
					className="px-6 items-center justify-between border-b border-neutral-200"
					height={3.5}
				>
					<Box height={1.5} width={12} color="200"></Box>
					<Flex gap={0.5}>
						<Box height={2} width={8} color="100"></Box>
						<Box height={2} width={2} color="100"></Box>
					</Flex>
				</Flex>
				<Flex
					className="flex-1 bg-neutral-50"
					padding={1.5}
					gap={1.5}
					direction="flex-col"
				>
					<div className="grid grid-cols-4 gap-4">
						<TripleCard />
						<TripleCard />
						<TripleCard />
						<TripleCard />
					</div>
					<Flex gap={1} className="flex-1">
						<DoubleCard />
						<Flex
							direction="flex-col"
							className="bg-white flex-1 border border-neutral-200 rounded-xl"
							padding={1}
						>
							<Box height={1.5} width={6} color="200" className="mb-4"></Box>
							<Flex className="items-center justify-center flex-1">
								<div className="w-40 h-40 rounded-full border-20 border-neutral-200 border-t-neutral-900"></div>
							</Flex>
						</Flex>
					</Flex>
					<Flex height={16}>
						<DoubleCard w={10} />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

function SideNav() {
	return (
		<Flex
			direction="flex-col"
			width={4}
			gap={1}
			className="py-4 items-center bg-neutral-900"
		>
			<Box color="700" width={2.5} height={2.5}></Box>
			<Box color="800" width={2.5} height={2.5}></Box>
			<Box color="800" width={2.5} height={2.5}></Box>
			<Box color="800" width={2.5} height={2.5}></Box>
			<Flex className="flex-1"></Flex>
			<Box color="800" width={2.5} height={2.5} borderRadius={999}></Box>
		</Flex>
	);
}

function TripleCard() {
	return (
		<Flex
			padding={1}
			className="bg-white rounded-xl justify-between border border-neutral-200"
			direction="flex-col"
			height={7}
		>
			<Box width={5} height={1} color="200"></Box>
			<Box width={6} height={2} color="300"></Box>
			<Box width={4} height={0.75} color="100"></Box>
		</Flex>
	);
}

function DoubleCard({ w = 8 }: { w?: number }) {
	return (
		<Flex
			direction="flex-col"
			className="flex-2 bg-white rounded-xl border border-neutral-200"
			padding={1}
		>
			<Box height={1.5} width={w} color="200" className="mb-4"></Box>
			<Box height={1} color="100" className="flex-1"></Box>
		</Flex>
	);
}
