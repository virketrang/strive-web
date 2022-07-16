// REACT
import React from 'react'

// INTERFACES
import Placement from '../interfaces/Placement'

interface Props {
	placement: Placement
	child: React.ReactElement
}

class NavigationClass {
	// interface
	placement: Placement
	child: React.ReactElement

	// constructor
	constructor({ placement, child }: Props) {
		this.placement = placement
		this.child = child
	}
}

export default function Navigation({ placement, child }: Props) {
	return new NavigationClass({ placement, child })
}
