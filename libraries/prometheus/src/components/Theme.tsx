// INTERFACES
import Colors from '../interfaces/Colors'
import ThemeInterface from '../interfaces/Theme'

class ThemeClass {
	colors?: Colors

	constructor({ colors }: ThemeInterface) {
		this.colors = colors
	}
}

export default function Theme({ colors }: ThemeInterface) {
	return new ThemeClass({ colors })
}
