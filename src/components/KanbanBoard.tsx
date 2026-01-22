import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function KanbanBoard() {
	return (
		<Flex direction="flex-col" className="flex-1">
			<Flex
				height={3.5}
				gap={1}
				className="px-6 items-center border-b border-neutral-200"
			>
				<Box width={12} height={1.5} color="200"></Box>
				<Flex gap={1} className="ml-auto">
					<Flex>
						<Box
							color="300"
							width={2}
							height={2}
							borderRadius={999}
							className="border-2 border-white -ml-2"
						></Box>
						<Box
							color="300"
							width={2}
							height={2}
							borderRadius={999}
							className="border-2 border-white -ml-2"
						></Box>
						<Box
							color="300"
							width={2}
							height={2}
							borderRadius={999}
							className="border-2 border-white -ml-2"
						></Box>
						<Box
							color="300"
							width={2}
							height={2}
							borderRadius={999}
							className="border-2 border-white -ml-2"
						></Box>
					</Flex>
					<Box width={6} height={2} color="100"></Box>
				</Flex>
			</Flex>
			<Flex
				padding={1.5}
				gap={1}
				className="flex-1 bg-neutral-100 w-screen overflow-auto"
			>
				<Board cardCount={3} />
				<Board cardCount={4} />
				<Board cardCount={2} />
				<Board cardCount={3} />
				<Board cardCount={3} />
			</Flex>
		</Flex>
	);
}

function Board({ cardCount }: { cardCount: number }) {
	return (
		<Flex
			direction="flex-col"
			padding={0.75}
			width={18}
			gap={0.75}
			className="rounded-xl bg-neutral-200 shrink-0"
		>
			<Flex height={1.25} className="justify-between">
				<Box width={6} height={1.25} color="400"></Box>
				<Box width={1.5} height={1.25} color="400"></Box>
			</Flex>
			<Flex direction="flex-col" gap={0.5} className="flex-1">
				{Array(cardCount)
					.fill(0)
					.map((_, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: the cards do not carry any state
						<Card key={idx} />
					))}
			</Flex>
			<Box height={2} color="300"></Box>
		</Flex>
	);
}

function Card() {
	return (
		<Flex
			direction="flex-col"
			padding={0.75}
			gap={0.5}
			className="rounded-lg bg-white"
		>
			<Box height={1} color="200"></Box>
			<Box height={1} className="w-3/4!" color="100"></Box>
			<Flex className="justify-between mt-2 items-center">
				<Box width={3} height={1.25} color="200"></Box>
				<Box width={1.5} height={1.5} borderRadius={999} color="200"></Box>
			</Flex>
		</Flex>
	);
}
