import { mappedColor } from "../../lib/constants";

type BoxProps = {
	width?: number;
	height: number;
	color: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
	borderRadius?: number;
	className?: string;
};

/**
 * Generic Box Component
 *
 * @prop {number} width: width in rem, by default 100%
 * @prop {number} height: height in rem
 * @prop color: the background color of the box
 * @prop {number} borderRadius: the border radius in rem, by default 0.25rem
 * @prop {string} className: custom class name
 */
export function Box({
	width,
	borderRadius,
	color,
	height,
	className,
}: BoxProps) {
	return (
		<div
			className={`${!width && "w-full"} ${!borderRadius && "rounded-sm"} ${mappedColor[color]} ${className}`}
			style={{
				height: `${height}rem`,
				width: width && `${width}rem`,
				borderRadius: borderRadius && `${borderRadius}rem`,
			}}
		></div>
	);
}
