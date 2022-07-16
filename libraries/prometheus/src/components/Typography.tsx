// REACT
import React from 'react'

// DEPENDENCIES
import styled from 'styled-components'

// INTERFACES
interface Props {
	value: string
	component?: React.ElementType | keyof JSX.IntrinsicElements
}

// STYLES
const StyledText = styled.p`
	font-weight: 600;
	font-size: 1.5rem;
`

// COMPONENT
const TypographyComponent: React.FC<Props> = ({ value, component }) => {
	return <StyledText as={component}>{value}</StyledText>
}

TypographyComponent.defaultProps = {
	component: 'p',
}

// FUNCTION
function Typography({ value, component }: Props) {
	return <TypographyComponent value={value} component={component} />
}

export default Typography
