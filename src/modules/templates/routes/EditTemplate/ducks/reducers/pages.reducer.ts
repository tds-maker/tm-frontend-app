import { IPagesStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'
import types from '../types'

const defaultPage: IPagesStore = {
	1: {
		_meta: {
			pageNo: 1,
			hasDefaultHeader: true,
			hasHeader: true,
			hasDefaultFooter: true,
			hasFooter: true,
			margin: {
				top: 40,
				left: 40,
				right: 40,
				bottom: 40,
			},
		},
		style: {
			position: 'relative',
			width: '900px',
			height: '1273px',
			backgroundColor: '#fff',
			backgroundSize: 'cover',
			backgroundPosition: '0 0',
			backgroundRepeat: 'no-repeat',
			paddingTop: '1px',
			display: 'flex',
			flexDirection: 'column',
		},
	},
}

const setPageMargin = (state: IPagesStore, action: IAction) => {
	const { pageMeta, styles } = action.payload
	const { pageNo } = pageMeta
	const margins = Object.keys(styles).reduce((prev: object, current: string): any => {
		let key = ''
		switch (current) {
			case 'marginTop':
				key = 'top'
				break
			case 'marginRight':
				key = 'right'
				break
			case 'marginBottom':
				key = 'bottom'
				break
			case 'marginLeft':
				key = 'left'
				break
		}
		
		prev[key] = styles[current].pxToNumber();
		return prev
	}, {})
	return {
		...state,
		[pageNo]: {
			...state[pageNo],
			_meta: {
				...state[pageNo]._meta,
				margin: {
					...state[pageNo]._meta.margin,
					...margins,
				},
			},
		},
	}
}
const pagesReducers = (state = defaultPage, action: IAction): IPagesStore => {
	let pageMeta;
	let isEnabled;
	let pageNo;
	switch (action.type) {
		case types.CHANGE_PAGE_MARGIN:
			return setPageMargin(state, action);
		case types.ENABLE_DISABLE_HEADER:
			pageMeta = action.payload.pageMeta;
			isEnabled = action.payload.isEnabled;
			pageNo = pageMeta.pageNo;
			return {
				[pageNo]: {
					...state[pageNo],
					_meta : {
						...state[pageNo]._meta,
						hasHeader: isEnabled
					}
				}
			}
		case types.ENABLE_DISABLE_FOOTER:
			pageMeta = action.payload.pageMeta;
			isEnabled = action.payload.isEnabled;
			pageNo = pageMeta.pageNo;
			return {
				[pageNo]: {
					...state[pageNo],
					_meta : {
						...state[pageNo]._meta,
						hasFooter: isEnabled
					}
				}
			}
		case types.UNDO:
		case types.REDO:
			return JSON.parse(JSON.stringify(action.payload.pages))
		default:
			return state
	}
}

export default pagesReducers
