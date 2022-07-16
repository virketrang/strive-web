// INTERFACES
import FontFamilyInterface from '../interfaces/FontFamily'

class FontFamilyClass {
	fontName: string
	constructor({ fontName }: FontFamilyInterface) {
		this.fontName = fontName
	}
}

export default function FontFamily(fontName: string) {
	return new FontFamilyClass({ fontName })
}
