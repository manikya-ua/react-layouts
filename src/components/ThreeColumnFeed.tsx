import { Box } from "./generic/Box";
import { Flex } from "./generic/Flex";

export function ThreeColumnFeed() {
	return (
		<Flex className="w-full flex-1">
			<Flex
				width={16}
				direction="flex-col"
				className="h-full justify-between border-r border-neutral-200"
				padding={1}
			>
				<Flex direction="flex-col" gap={0.5}>
					<Box color="200" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
				</Flex>
				<Box color="900" height={3}></Box>
			</Flex>
			<Flex className="flex-1 border-r border-neutral-200">
				<Flex direction="flex-col" className="flex-1">
					<Flex height={3.5} className="border-b border-neutral-200"></Flex>
					<Flex className="flex-1" padding={1} gap={1} direction="flex-col">
						<Box
							color="100"
							height={10}
							className="border border-neutral-200"
						></Box>
						<Box
							color="100"
							height={14}
							className="border border-neutral-200"
						></Box>
						<Box
							color="100"
							height={10}
							className="border border-neutral-200"
						></Box>
					</Flex>
				</Flex>
			</Flex>
			<Flex direction="flex-col" width={20} padding={1} gap={1}>
				<Box color="100" borderRadius={999} height={2.5}></Box>
				<Box color="100" borderRadius={0.75} height={12}></Box>
				<Box color="100" borderRadius={0.75} height={16}></Box>
			</Flex>
		</Flex>
	);
}
