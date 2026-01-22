import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function MapListSplit() {
	return (
		<Flex direction="flex-col" className="flex-1">
			<Flex
				height={2.5}
				gap={1}
				className="border-b border-neutral-200 px-6 items-center"
			>
				<Box color="900" height={2} width={8}></Box>
				<Box
					color="100"
					height={2.5}
					borderRadius={999}
					className="flex-1 max-w-2xl"
				></Box>
				<Flex className="flex-1"></Flex>
				<Box
					width={2}
					height={2}
					color="200"
					borderRadius={999}
					className="ml-auto"
				></Box>
			</Flex>
			<Flex className="flex-1">
				<Flex
					className="w-1/2! border-r border-neutral-200"
					direction="flex-col"
				>
					<Flex
						height={3}
						className="px-4 items-center border-b border-neutral-200"
						gap={0.5}
					>
						<Box width={6} height={2} color="100" borderRadius={999}></Box>
						<Box width={6} height={2} color="100" borderRadius={999}></Box>
						<Box width={6} height={2} color="100" borderRadius={999}></Box>
					</Flex>
					<Flex
						direction="flex-col"
						padding={1}
						gap={1}
						className="flex-1 overflow-hidden max-h-full"
					>
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
					</Flex>
				</Flex>
				<Flex className="w-1/2! bg-neutral-200 relative">
					<Flex
						direction="flex-col"
						gap={0.5}
						className="absolute top-4 left-4"
					>
						<Box
							width={2.5}
							height={2.5}
							color="white"
							className="shadow"
						></Box>
						<Box
							width={2.5}
							height={2.5}
							color="white"
							className="shadow"
						></Box>
					</Flex>
					<div className="absolute top-20 left-32 h-8 px-3 bg-white rounded-full shadow"></div>
					<div className="absolute top-40 right-48 h-8 px-3 bg-white rounded-full shadow"></div>
					<div className="absolute bottom-32 left-48 h-8 px-3 bg-white rounded-full shadow"></div>
					<div className="absolute bottom-20 right-32 h-8 px-3 bg-neutral-900 rounded-full shadow"></div>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Card() {
	return (
		<Flex padding={0.5} gap={1} className="rounded-xl hover:bg-neutral-50">
			<Box height={12} width={18} borderRadius={0.75} color="200"></Box>
			<Flex direction="flex-col" className="py-2 flex-1" gap={0.5}>
				<Box width={8} height={1} color="200"></Box>
				<Box height={1.5} color="200" className="w-3/4!"></Box>
				<Box height={1} color="100" className="w-1/2!"></Box>
				<Flex className="flex-1"></Flex>
				<Box height={1.5} width={6} color="300"></Box>
			</Flex>
		</Flex>
	);
}
