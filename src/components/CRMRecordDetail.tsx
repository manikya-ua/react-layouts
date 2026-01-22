import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function CRMRecordDetail() {
	return (
		<Flex direction="flex-col" className="flex-1">
			<Flex
				height={3.5}
				className="border-b border-neutral-200 items-center px-6"
				gap={1}
			>
				<Box color="200" width={2} height={2}></Box>
				<Box color="200" width={12} height={1.5}></Box>
				<Flex className="flex-1"></Flex>
				<Box width={5} height={2} color="100"></Box>
				<Box width={5} height={2} color="900"></Box>
			</Flex>
			<Flex
				padding={1.5}
				className="border-b border-neutral-200 bg-neutral-100"
			>
				<Flex gap={1.5}>
					<Box width={5} height={5} color="300" borderRadius={999}></Box>
					<Flex direction="flex-col" gap={0.5} className="flex-1">
						<Box width={16} height={2} color="300"></Box>
						<Box width={24} height={1.25} color="200"></Box>
						<Flex gap={1} className="mt-2">
							<Box
								height={2}
								width={7}
								color="white"
								className="border border-neutral-300"
							></Box>
							<Box
								height={2}
								width={7}
								color="white"
								className="border border-neutral-300"
							></Box>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex className="flex-1">
				<Flex className="flex-1" direction="flex-col">
					<Flex
						height={3}
						className="border-b border-neutral-200 items-center px-6"
						gap={1.5}
					>
						<Box width={4} height={1.25} color="900"></Box>
						<Box width={4} height={1.25} color="200"></Box>
						<Box width={4} height={1.25} color="200"></Box>
						<Box width={4} height={1.25} color="200"></Box>
					</Flex>
					<Flex padding={1.5} direction="flex-col" className="flex-1">
						<Table />
					</Flex>
				</Flex>

				<Flex
					gap={1}
					padding={1}
					width={20}
					className="border-l border-neutral-200"
					direction="flex-col"
				>
					<Box height={1.5} width={6} color="200"></Box>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Card() {
	return (
		<Flex padding={0.75} gap={0.75} className="bg-neutral-50 rounded-lg">
			<Box
				color="200"
				width={2}
				height={2}
				borderRadius={999}
				className="shrink-0"
			></Box>
			<Flex direction="flex-col" className="flex-1" gap={0.25}>
				<Box height={1} color="200"></Box>
				<Box height={0.75} width={5} color="100"></Box>
			</Flex>
		</Flex>
	);
}

function Table() {
	return (
		<div className="grid grid-cols-2 gap-6">
			<div className="flex flex-col gap-4">
				<div className="h-6 w-32 bg-neutral-200 rounded"></div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="h-6 w-32 bg-neutral-200 rounded"></div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
				<div className="flex justify-between py-2 border-b border-neutral-100">
					<div className="h-4 w-24 bg-neutral-200 rounded"></div>
					<div className="h-4 w-40 bg-neutral-100 rounded"></div>
				</div>
			</div>
		</div>
	);
}
