// REACT
import React from 'react'

// INTERFACES
interface Props {
    children: React.ReactNode
}

const Row: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>
}

export default Row
