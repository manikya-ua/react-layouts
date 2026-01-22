import { Flex } from "./generic/Flex";
import { Box } from "./generic/Box";

export function ChatMessenger() {
	return (
		<Flex className="flex-1">
			<Flex
				direction="flex-col"
				width={16}
				className="border-r border-neutral-200"
			>
				<Flex
					height={3.5}
					className="w-full items-center px-4 border-b border-neutral-200"
				>
					<Box height={2} color="100" className="flex-1"></Box>
				</Flex>
				<Flex direction="flex-col">
					<Contact isActive />
					<Contact />
					<Contact />
					<Contact />
					<Contact />
					<Contact />
					<Contact />
					<Contact />
				</Flex>
			</Flex>
			<Flex direction="flex-col" className="flex-1">
				<Flex
					height={3.5}
					className="w-full items-center px-6 border-b border-neutral-200"
					gap={0.75}
				>
					<Box height={2.5} width={2.5} borderRadius={999} color="200"></Box>
					<Flex direction="flex-col" gap={0.25}>
						<Box width={8} height={1.25} color="200"></Box>
						<Box width={5} height={0.75} color="100"></Box>
					</Flex>
					<div className="flex-1" />
					<Box width={2} height={2} color="100"></Box>
					<Box width={2} height={2} color="100"></Box>
					<Box width={2} height={2} color="100"></Box>
				</Flex>
				<Flex className="flex-1" direction="flex-col">
					<Flex gap={1} padding={1.5} direction="flex-col" className="flex-1">
						<Flex gap={0.75}>
							<Box borderRadius={999} width={2} height={2} color="200"></Box>
							<div>
								<div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
									<Box height={1} width={16} color="200"></Box>
								</div>
							</div>
						</Flex>
						<Flex className="flex-row-reverse!">
							<div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
								<Box height={1} width={12} color="700"></Box>
								<Box height={1} width={8} color="700" className="mt-2"></Box>
							</div>
						</Flex>
						<Flex gap={0.75}>
							<Box borderRadius={999} width={2} height={2} color="200"></Box>
							<div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
								<Box height={1} width={20} color="200"></Box>
								<Box height={1} width={12} color="200" className="mt-2"></Box>
							</div>
						</Flex>
						<Flex className="flex-row-reverse!">
							<div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
								<Box height={1} width={14} color="700"></Box>
							</div>
						</Flex>
					</Flex>
					<Flex
						className="items-center border-t border-neutral-200"
						height={5}
						padding={1}
						gap={0.75}
					>
						<Box width={2.5} height={2.5} color="100"></Box>
						<Box
							className="flex-1"
							height={3}
							borderRadius={999}
							color="100"
						></Box>
						<Box width={2.5} height={2.5} borderRadius={999} color="900"></Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

function Contact({ isActive }: { isActive?: boolean }) {
	return (
		<Flex
			gap={0.75}
			height={4}
			className={`px-4 items-center ${isActive ? "bg-neutral-100" : "hover:bg-neutral-50"}`}
		>
			<Box
				color="300"
				height={2.5}
				width={2.5}
				borderRadius={999}
				className="shrink-0"
			></Box>
			<Flex gap={0.25} direction="flex-col" className="w-full">
				<Flex className="justify-between w-full">
					<Box width={6} height={1} color="200"></Box>
					<Box width={2.5} height={0.75} color="200"></Box>
				</Flex>
				<Box height={0.75} color="100"></Box>
			</Flex>
		</Flex>
	);
}
