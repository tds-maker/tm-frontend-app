import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'
import { pageLayout } from '../../../ducks/enums'
import SingleColumn from './SingleColumn'
import DoubleColumn from './DoubleColumn'
import TripleColumn from './TripleColumn'
import SingleTopDoubleBottom from './SingleTopDoubleBottom'
import DoubleTopSingleBottom from './DoubleTopSingleBottom'
import DoubleMiddle from './DoubleMiddle'

interface IProps {
	layout: string
	elements: {
		[key: string]: IElement
	}
	pageNo: number
}

const PageLayout = ({ layout, elements, pageNo }: IProps) => {
	switch (layout) {
		case pageLayout.singleColumn:
			return <SingleColumn pageNo={pageNo} elements={elements} />
		case pageLayout.doubleColumn:
			return <DoubleColumn pageNo={pageNo} elements={elements} />
		case pageLayout.tripleColumn:
			return <TripleColumn pageNo={pageNo} elements={elements} />
		case pageLayout.singleTopDoubleBottom:
			return <SingleTopDoubleBottom pageNo={pageNo} elements={elements} />
		case pageLayout.doubleTopSingleBottom:
			return <DoubleTopSingleBottom pageNo={pageNo} elements={elements} />
		case pageLayout.singleTopDoubleMiddleSingleBottom:
			return <DoubleMiddle pageNo={pageNo} elements={elements} />
		default:
			return null
	}
}

export default PageLayout
