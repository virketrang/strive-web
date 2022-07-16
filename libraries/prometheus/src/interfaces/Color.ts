type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type CMYK = `cmyk(${number}%, ${number}%, ${number}%, ${number}%)`

type Color = RGB | RGBA | HEX | CMYK

export default Color
