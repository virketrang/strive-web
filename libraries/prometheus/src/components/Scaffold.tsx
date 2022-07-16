// REACT
import React from 'react'

// DEPENDENCIES
import styled from 'styled-components'

// INTERFACES
import Navigation from '../interfaces/Navigation'

interface Props {
	appBar?: React.ReactElement
	content: React.ReactElement
	navigation?: Navigation
}

// STYLES
const StyledScaffold = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`

// COMPONENT
const ScaffoldComponent: React.FC<Props> = ({
	appBar,
	content,
	navigation,
}) => {
	return (
		<StyledScaffold>
			{appBar && appBar}
			<Wrapper>
				{navigation && navigation.child}
				<main>{content}</main>
			</Wrapper>
		</StyledScaffold>
	)
}

// FUNCTION
export default function Scaffold({ appBar, navigation, content }: Props) {
	return (
		<ScaffoldComponent
			appBar={appBar}
			navigation={navigation}
			content={content}
		/>
	)
}
