import { CSSProperties } from 'react'
import { IElement } from './interfaces';
import { metaDomType, metaType, moveState } from './enums';

const HeaderObject: any = {
	_id: 'header-0',
	_meta: {
		typeName: 'header',
		htmlDom: 'div',
	},
	style: {
		height: '150px',
		overflow: 'hidden',
		position: 'relative',
	},
	elements: [],
}

const FooterObject: any = {
	_id: 'footer-0',
	_meta: {
		typeName: 'footer',
		htmlDom: 'div',
	},
	style: {
		height: '70px',
		overflow: 'hidden',
		position: 'relative',
	},
	elements: [],
}

const PageObject: any = {
	_meta: {
		typeName: 'page',
		htmlDom: 'div',
		hasHeader: true,
		hasFooter: true,
		layout: '1 Column',
		margin: {
			top: 40,
			right: 40,
			bottom: 40,
			left: 40,
		},
	},
	style: {
		position: 'relative',
		width: '900px',
		height: '1273px',
		backgroundColor: 'rgb(255, 255, 255)',
		backgroundSize: 'cover',
		backgroundPosition: '0px 0px',
		backgroundRepeat: 'no-epeat',
		paddingTop: '1px',
		display: 'flex',
		flexDirection: 'column',
	},
	elements: [],
}

const SingleLayoutBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bp-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
			},
			elements: []
		},
	],
})

const DoubleLayoutBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bp-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				width: '50%',
				overflow: 'hidden',
				position: 'relative',
			},
		},
		{
			_id: `bp-${pageNo}-2`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
			},
		},
	],
})

const TripleLayoutBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bp-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				width: '33%',
				overflow: 'hidden',
				position: 'relative',
			},
		},
		{
			_id: `bp-${pageNo}-2`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				width: '33%',
				overflow: 'hidden',
				position: 'relative',
			},
		},
		{
			_id: `bp-${pageNo}-3`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
			},
		},
	],
})

const SingleTopDoubleBottomBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bp-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				overflow: 'hidden',
				position: 'relative',
				height: '40%',
			},
		},
		{
			_id: `bpc-${pageNo}-2`,
			_meta: {
				typeName: 'body-panel-container',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
				display: 'flex',
			},
			elements: [
				{
					_id: `bp-${pageNo}-2-1`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						width: '50%',
						overflow: 'hidden',
						position: 'relative',
					},
				},
				{
					_id: `bp-${pageNo}-2-2`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						flex: '1',
						overflow: 'hidden',
					},
				},
			],
		},
	],
})

const DoubleTopSingleBottomBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bpc-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel-container',
				htmlDom: 'div',
			},
			style: {
				overflow: 'hidden',
				display: 'flex',
				height: '60%',
				position: 'relative',
			},
			elements: [
				{
					_id: `bp-${pageNo}-1-1`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						width: '50%',
						overflow: 'hidden',
						position: 'relative',
					},
				},
				{
					_id: `bp-${pageNo}-1-2`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						flex: '1',
						overflow: 'hidden',
					},
				},
			],
		},
		{
			_id: `bp-${pageNo}-2`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
			},
		},
	],
})

const DoubleMiddleBodyObject = (pageNo: number, marginStyle: CSSProperties): any => ({
	_id: `bc-${pageNo}`,
	_meta: {
		typeName: 'body-container',
		htmlDom: 'div',
	},
	style: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		...marginStyle,
	},
	elements: [
		{
			_id: `bp-${pageNo}-1`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				position: 'relative',
				height: '33%',
				overflow: 'hidden',
			},
		},
		{
			_id: `bpc-${pageNo}-2`,
			_meta: {
				typeName: 'body-panel-container',
				htmlDom: 'div',
			},
			style: {
				overflow: 'hidden',
				display: 'flex',
				height: '33%',
				position: 'relative',
			},
			elements: [
				{
					_id: `bp-${pageNo}-2-1`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						width: '50%',
						overflow: 'hidden',
						position: 'relative',
					},
				},
				{
					_id: `bp-${pageNo}-2-2`,
					_meta: {
						typeName: 'body-panel',
						htmlDom: 'div',
					},
					style: {
						flex: '1',
						overflow: 'hidden',
					},
				},
			],
		},
		{
			_id: `bp-${pageNo}-3`,
			_meta: {
				typeName: 'body-panel',
				htmlDom: 'div',
			},
			style: {
				flex: '1',
				overflow: 'hidden',
			},
		},
	],
})

const DefaultTextElement = ():IElement => ({
	_id: 'new',
	_meta : {
		htmlDom : metaDomType.label,
		typeName: metaType.text,
		moveState: moveState.none,
		containerId: ""
	},
	elements : [],
	style : {
		width: "100%",
		height: "auto",
		color: "#000000",
		marginBottom: "0px",
		marginTop: "0px",
		marginLeft: "0px",
		marginRight: "0px",
		fontWeight: "normal",
		fontSize: "12px"
	},
	value: 'Sample text'
})

export default {
	HeaderObject,
	FooterObject,
	PageObject,
	SingleLayoutBodyObject,
	DoubleLayoutBodyObject,
	TripleLayoutBodyObject,
	SingleTopDoubleBottomBodyObject,
	DoubleTopSingleBottomBodyObject,
	DoubleMiddleBodyObject,
	DefaultTextElement
}
