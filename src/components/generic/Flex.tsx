type FlexProps = {
	children?: React.ReactNode;
	direction?: "flex-row" | "flex-col";
	gap?: number;
	padding?: number;
	width?: number;
	height?: number;
	className?: string;
};

/**
 * Render a flex box
 * @prop direction: tells the direction of flexbox
 * @prop {number} gap : tells the gap in rem
 * @prop {number} padding : tells the padding in rem
 * @prop {string} className: custom class name
 * @prop {number} width: some fixed width in rem if needed
 * @prop {number} height: some fixed height in rem if needed
 */
export function Flex({
	children,
	direction = "flex-row",
	gap = 0,
	padding = 0,
	width,
	height,
	className,
}: FlexProps) {
	return (
		<div
			className={`flex ${direction} ${className}`}
			style={{
				gap: `${gap}rem`,
				padding: `${padding}rem`,
				height: height && `${height}rem`,
				width: width && `${width}rem`,
			}}
		>
			{children}
		</div>
	);
}
