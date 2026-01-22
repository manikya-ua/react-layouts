import { Box } from "./generic/Box";
import { Flex } from "./generic/Flex";

export function SidebarContent() {
	return (
		<Flex className="flex-1">
			<Flex
				direction="flex-col"
				width={16}
				className="border-r border-neutral-200"
			>
				<Flex padding={1}>
					<Box color="900" height={3}></Box>
				</Flex>
				<Flex direction="flex-col" padding={1} gap={0.25} className="pt-0!">
					<Box color="200" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
					<div className="h-px bg-neutral-200 my-2"></div>
					<Box color="100" height={2.5}></Box>
					<Box color="100" height={2.5}></Box>
				</Flex>
			</Flex>
			<Flex direction="flex-col" className="flex-1">
				<Flex
					gap={0.5}
					height={3.5}
					className="px-4 items-center border-b border-neutral-200"
				>
					<Box color="200" height={2} width={2}></Box>
					<Box color="200" height={2} width={2}></Box>
					<Box color="100" width={16} height={2} className="ml-auto"></Box>
				</Flex>
				<Flex className="flex-1" direction="flex-col" padding={1}>
					<Row></Row>
					<Row></Row>
					<Row></Row>
					<Row></Row>
					<Row></Row>
					<Row></Row>
					<Row></Row>
					<Row></Row>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Row() {
	return (
		<Flex
			className="px-2 border-b border-neutral-100 items-center"
			height={3}
			gap={0.75}
		>
			<Box width={1.25} height={1.25} color="200"></Box>
			<Box width={1.25} height={1.25} color="200"></Box>
			<Box width={8} height={1} color="200"></Box>
			<Box height={1} color="100" className="flex-1"></Box>
			<Box width={4} height={1} color="100"></Box>
		</Flex>
	);
}
