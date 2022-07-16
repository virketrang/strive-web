// REACT
import React from 'react'

// DEPENDENCIES
import styled from 'styled-components'

// INTERFACES
import SlideNavStyle from '../interfaces/SlideNavStyle'

interface Props {
	style?: SlideNavStyle
}

// STYLES
const StyledSlideNav = styled.nav<SlideNavStyle>`
	height: 100%;
	width: ${({ width }) => (width ? width : 4)}rem;
	background-color: ${({ color, theme }) =>
		color ? color : theme.colors.lightgray};
`

// COMPONENT
const SlideNavComponent: React.FC<Props> = ({ style }) => {
	return (
		<StyledSlideNav
			width={style!.width}
			color={style!.color}
		></StyledSlideNav>
	)
}

SlideNavComponent.defaultProps = {
	style: {
		width: 4,
	},
}

function SlideNav({ style }: Props) {
	return <SlideNavComponent style={style} />
}

export default SlideNav
