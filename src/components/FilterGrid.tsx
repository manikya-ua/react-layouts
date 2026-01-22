import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function FilterGrid() {
	return (
		<Flex direction="flex-col" className="flex-1">
			<Flex
				height={4}
				className="px-6 border-b border-neutral-200 items-center"
			>
				<Box color="900" width={8} height={2}></Box>
				<Flex className="flex-1"></Flex>
				<Box color="100" width={20} height={2.5} borderRadius={999}></Box>
				<Flex className="flex-1"></Flex>
				<Box color="200" width={2} height={2} borderRadius={999}></Box>
			</Flex>
			<Flex className="flex-1">
				<Flex
					direction="flex-col"
					width={18}
					gap={1.5}
					padding={1.5}
					className="border-r border-neutral-200"
				>
					<Flex direction="flex-col" gap={0.5}>
						<Box color="300" width={5} height={1.25}></Box>
						<Box color="100" height={2.5}></Box>
					</Flex>
					<Flex direction="flex-col" gap={0.5}>
						<Box color="300" width={6} height={1.25}></Box>
						<Box color="200" height={0.5} borderRadius={999}></Box>
					</Flex>
					<Flex direction="flex-col" gap={0.5}>
						<Box color="300" width={5} height={1.25}></Box>
						<Flex direction="flex-col" gap={0.5}>
							<Box color="100" height={1.5}></Box>
							<Box color="100" height={1.5}></Box>
							<Box color="100" height={1.5}></Box>
						</Flex>
					</Flex>
					<Flex direction="flex-col" gap={0.5}>
						<Box color="300" width={7} height={1.25}></Box>
						<Flex direction="flex-col" gap={0.5}>
							<Box color="100" height={1.5}></Box>
							<Box color="100" height={1.5}></Box>
						</Flex>
					</Flex>
				</Flex>
				<Flex padding={1.5} gap={1} direction="flex-col" className="flex-1">
					<Flex className="items-center justify-between">
						<Box color="200" height={1.5} width={12}></Box>
						<Box color="100" height={2} width={8}></Box>
					</Flex>
					<div className="grid gap-4 grid-cols-3 flex-1">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Card() {
	return (
		<Flex
			direction="flex-col"
			className="bg-neutral-100 rounded-xl overflow-hidden"
		>
			<Box height={12} color="200"></Box>
			<Flex direction="flex-col" gap={0.5} padding={1}>
				<Box color="200" height={1.25} className="w-3/4!"></Box>
				<Box color="200" height={1} className="w-1/2!"></Box>
				<Box color="300" height={1.5} className="w-1/3! mt-2"></Box>
			</Flex>
		</Flex>
	);
}
