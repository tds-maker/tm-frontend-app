import { IPagesStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'
import types from '../types'
import { defaultPageState } from './defaults'

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

		prev[key] = styles[current].pxToNumber()
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
const pagesReducers = (state = defaultPageState, action: IAction): IPagesStore => {
	let pageMeta
	let isEnabled
	let pageNo
	switch (action.type) {
		case types.CHANGE_PAGE_MARGIN:
			return setPageMargin(state, action)
		case types.ENABLE_DISABLE_HEADER:
			pageMeta = action.payload.pageMeta
			isEnabled = action.payload.isEnabled
			pageNo = pageMeta.pageNo
			return {
				[pageNo]: {
					...state[pageNo],
					_meta: {
						...state[pageNo]._meta,
						hasHeader: isEnabled,
					},
				},
			}
		case types.ENABLE_DISABLE_FOOTER:
			pageMeta = action.payload.pageMeta
			isEnabled = action.payload.isEnabled
			pageNo = pageMeta.pageNo
			return {
				[pageNo]: {
					...state[pageNo],
					_meta: {
						...state[pageNo]._meta,
						hasFooter: isEnabled,
					},
				},
			}
		case types.UNDO:
		case types.REDO:
			return JSON.parse(JSON.stringify(action.payload.pages))
		default:
			return state
	}
}

export default pagesReducers
