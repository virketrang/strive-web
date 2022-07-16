// REACT
import React from 'react'

// NEXT
import Head from 'next/head'

// INTERFACE
interface Props {
	title: string
	description: string
}

// COMPONENT
const MetaComponent: React.FC<Props> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta
				name='viewport'
				content='initial-scale=1.0, width=device-width'
			/>
		</Head>
	)
}

function Meta({ title, description }: Props) {
	return <MetaComponent title={title} description={description} />
}

export default Meta
