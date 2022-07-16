import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

html, body, #__next {
    font-size: 16px;
    width: 100%;
    min-height: 100vh;
    display: grid;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    color: inherit;
    border: none;
}

p {
    line-height: 1.7;
}
`

export default GlobalStyles
