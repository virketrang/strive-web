// REACT
import React from 'react'

// DEPENDENCIES
import styled from 'styled-components'

// INTERFACES
import TextStyle from '../interfaces/TextStyle'

interface Props {
	value: string
	style?: TextStyle
	component?: React.ElementType | keyof JSX.IntrinsicElements
}

// STYLES
const StyledText = styled.p<TextStyle>`
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => fontSize}rem;
	font-family: ${({ fontFamily }) => fontFamily && fontFamily.fontName};
	color: ${({ color }) => color && color};
`

// COMPONENT
const TextComponent: React.FC<Props> = ({ value, style, component }) => {
	console.log(style)
	return (
		<StyledText
			as={component}
			fontSize={style?.fontSize}
			fontWeight={style?.fontWeight}
			fontFamily={style?.fontFamily}
			color={style?.color}
		>
			{value}
		</StyledText>
	)
}

TextComponent.defaultProps = {
	component: 'p',
}

// FUNCTION
function Text({ value, style, component }: Props) {
	return <TextComponent value={value} style={style} component={component} />
}

export default Text
