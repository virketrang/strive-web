// REACT
import React from 'react'

// DEPENDENCIES
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// THEME
import defaultTheme from '../../defaultTheme'

// GLOBAL STYLES
import GlobalStyles from '../../global'

// INTERFACES
import Theme from '../interfaces/Theme'

interface Props {
	head: React.ReactElement
	body: React.ReactElement
	theme?: Theme
	fonts?: string[]
}

interface Fonts {
	fonts?: string[]
}

const Fonts = createGlobalStyle<Fonts>`
	${({ fonts }) => fonts && fonts.map(font => `@import url(${font})`)}

	body {
		font-family: 'Poppins';
	}
`

// COMPONENT
const AppComponent: React.FC<Props> = ({ head, body, theme, fonts }) => {
	return (
		<ThemeProvider theme={theme ? theme : defaultTheme}>
			<GlobalStyles />
			<Fonts fonts={fonts} />
			{head}
			{body}
		</ThemeProvider>
	)
}

// FUNCTION
function App({ head, body, theme }: Props) {
	return <AppComponent head={head} body={body} theme={theme} />
}

export default App
