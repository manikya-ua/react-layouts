import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function DataTable() {
	return (
		<Flex direction="flex-col" className="flex-1">
			<Flex
				height={3.5}
				className="border-b border-neutral-200 px-6 items-center"
				gap={1}
			>
				<Box height={1.5} width={10} color="200"></Box>
				<div className="flex-1"></div>
				<Box height={2} width={8} color="100"></Box>
				<Box height={2} width={6} color="900"></Box>
			</Flex>
			<Flex
				height={3}
				className="border-b border-neutral-200 px-6 items-center"
				gap={0.5}
			>
				<Box color="100" width={7} height={1.75} borderRadius={999}></Box>
				<Box color="100" width={7} height={1.75} borderRadius={999}></Box>
				<Box color="100" width={7} height={1.75} borderRadius={999}></Box>
				<div className="flex-1"></div>
				<Box width={12} height={1.75} color="100"></Box>
			</Flex>
			<Flex
				height={2.5}
				gap={1}
				className="px-4 bg-neutral-100 items-center border-b border-neutral-200"
			>
				<Box width={3} height={1.25} color="200"></Box>
				<Box width={12} height={1.25} color="200"></Box>
				<Box width={10} height={1.25} color="200"></Box>
				<Box width={8} height={1.25} color="200"></Box>
				<Box width={8} height={1.25} color="200"></Box>
				<Box width={6} height={1.25} color="200"></Box>
				<Box width={5} height={1.25} color="200" className="ml-auto"></Box>
			</Flex>
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<div className="flex-1"></div>
			<Flex
				className="border-t border-neutral-200 items-center px-6"
				height={3}
			>
				<Box width={8} height={1.25} color="200"></Box>
				<Flex gap={0.5} className="ml-auto">
					<Box color="100" width={2} height={2}></Box>
					<Box color="200" width={2} height={2}></Box>
					<Box color="100" width={2} height={2}></Box>
					<Box color="100" width={2} height={2}></Box>
					<Box color="100" width={2} height={2}></Box>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Row() {
	return (
		<Flex
			height={3.5}
			gap={1}
			className="px-4 items-center hover:bg-neutral-50"
		>
			<Box width={3} height={1.25} color="200"></Box>
			<Box width={12} height={1.25} color="100"></Box>
			<Box width={10} height={1.25} color="100"></Box>
			<Box width={8} height={1.25} color="100"></Box>
			<Box width={8} height={1.25} color="100"></Box>
			<Box width={6} height={1.25} color="200"></Box>
			<Flex gap={0.5} width={5} className="ml-auto justify-start">
				<Box width={1.5} height={1.5} color="200"></Box>
				<Box width={1.5} height={1.5} color="200"></Box>
			</Flex>
		</Flex>
	);
}
