import SlideNavStyle from '../interfaces/SlideNavStyle'

class SlideNavStylesClass {
	color?: string
	width?: number

	constructor({ color, width }: SlideNavStyle) {
		this.color = color
		this.width = width
	}
}

export default function SlideNavStyles({ color, width }: SlideNavStyle) {
	return new SlideNavStylesClass({ color, width })
}
