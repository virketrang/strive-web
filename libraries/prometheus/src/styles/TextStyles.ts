// INTERFACES
import FontWeight from '../interfaces/FontWeight'
import TextStyle from '../interfaces/TextStyle'
import FontFamily from '../interfaces/FontFamily'
import Color from '../interfaces/Color'

class TextStylesClass {
	fontSize?: number
	fontWeight?: FontWeight
	fontFamily?: FontFamily
	color?: Color

	constructor({ fontSize, fontWeight, fontFamily, color }: TextStyle) {
		this.fontSize = fontSize
		this.fontWeight = fontWeight
		this.fontFamily = fontFamily
		this.color = color
	}
}

export default function TextStyles({
	fontSize,
	fontWeight,
	fontFamily,
	color,
}: TextStyle) {
	return new TextStylesClass({ fontSize, fontWeight, fontFamily, color })
}
