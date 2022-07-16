import AppBarStyle from '../interfaces/AppBarStyle'

class AppBarStylesClass {
	color?: string
	elevation?: number
	height?: number

	constructor({ color, height, elevation }: AppBarStyle) {
		this.color = color
		this.height = height
		this.elevation = elevation
	}
}

export default function AppBarStyles({
	color,
	height,
	elevation
}: AppBarStyle) {
	return new AppBarStylesClass({ color, height, elevation })
}
