// NEXT
import { NextComponentType, NextPageContext } from 'next'

// INTERFACES
interface Props {
	page: NextComponentType<NextPageContext, any, {}>
	props: any
}

// FUNCTION
export default function Load({ page: Page, props }: Props) {
	return <Page {...props} />
}
