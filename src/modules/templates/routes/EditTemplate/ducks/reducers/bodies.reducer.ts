import types from '../types'
import { IBodyStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'
import { defaultBodyState } from './defaults'

const bodiesReducer = (state = defaultBodyState, action: IAction): IBodyStore => {
	let pageMeta
	let pageNo
	let isEnabled
	switch (action.type) {
		case types.CHANGE_PAGE_MARGIN:
			const { styles } = action.payload
			pageMeta = action.payload.pageMeta
			pageNo = pageMeta.pageNo
			return {
				...state,
				[pageNo]: {
					...state[pageNo],
					style: {
						...state[pageNo].style,
						...styles,
					},
				},
			}

		case types.ENABLE_DISABLE_HEADER:
			isEnabled = action.payload.isEnabled
			pageMeta = action.payload.pageMeta
			pageNo = pageMeta.pageNo
			return {
				[pageNo]: {
					...state[pageNo],
					style: {
						...state[pageNo].style,
						marginTop: `${!isEnabled ? pageMeta.margin.top : 0}px`,
					},
				},
			}
		case types.ENABLE_DISABLE_FOOTER:
			isEnabled = action.payload.isEnabled
			pageMeta = action.payload.pageMeta
			pageNo = pageMeta.pageNo

			return {
				[pageNo]: {
					...state[pageNo],
					style: {
						...state[pageNo].style,
						marginBottom: `${!isEnabled ? pageMeta.margin.bottom : 0}px`,
					},
				},
			}
		case types.UNDO:
		case types.REDO:
			return JSON.parse(JSON.stringify(action.payload.bodies))
		default:
			return state
	}
}

export default bodiesReducer
