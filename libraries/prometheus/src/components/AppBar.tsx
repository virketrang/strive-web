// REACT
import React from 'react'

// DEPENDENCIES
import styled from 'styled-components'

// INTERFACES
import AppBarStyle from '../interfaces/AppBarStyle'

interface Props {
	title: React.ReactElement
	style?: AppBarStyle
}

// STYLES
const StyledAppBar = styled.header<AppBarStyle>`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: ${({ height }) => height}rem;
	background-color: ${({ color, theme }) =>
		color ? color : theme.colors.lightblue};
	box-shadow: 0 0 4px ${({ elevation }) => elevation}px rgba(0, 0, 0, 0.15);
`

// COMPONENT
const AppBarComponent: React.FC<Props> = ({ title, style }) => {
	return (
		<StyledAppBar
			color={style!.color}
			height={style!.height}
			elevation={style!.elevation}
		>
			{title}
		</StyledAppBar>
	)
}

AppBarComponent.defaultProps = {
	style: { height: 4, elevation: 1, color: undefined },
}

function AppBar({ title, style }: Props) {
	return <AppBarComponent title={title} style={style} />
}

export default AppBar
