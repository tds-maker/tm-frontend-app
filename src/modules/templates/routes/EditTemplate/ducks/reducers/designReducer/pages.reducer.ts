import update from 'immutability-helper'
import types from '../../types'
import { IAction, IPagesReducer } from '../../interfaces'

const setBodyResize = (state: IPagesReducer, action: IAction): IPagesReducer => {
	const { element, style } = action.payload
	if (element && element._meta.typeName === 'body-container') {
		const activePageNo = action.payload.options
		const page = state[activePageNo]
		const { margin, hasFooter, hasHeader } = page._meta
		const newMargin = Object.keys(style).reduce((prev: any, current: string) => {
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
			if ((key === 'top' && hasHeader) || (key === 'bottom' && hasFooter)) {
				prev[key] = margin[key]
			} else {
				prev[key] = style[current].pxToNumber()
			}

			return prev
		}, {})

		return update(state, {
			[activePageNo]: {
				_meta: { margin: { $merge: newMargin } },
			},
		})
	} else {
		return state
	}
}

const pagesReducer = (state: IPagesReducer = {}, action: IAction): IPagesReducer => {
	switch (action.type) {
		case types.INIT_EDIT_TEMPLATE:
			const data = action.payload
			return {
				...data.design.pages,
			}
		case types.SET_ELEMENT_STYLE:
			return setBodyResize(state, action)
		case types.CHANGE_HEADER_STATUS:
			return update(state, {
				[action.payload.pageNo]: {
					_meta: { hasHeader: { $set: action.payload.isEnabled } },
				},
			})
		case types.CHANGE_FOOTER_STATUS:
			return update(state, {
				[action.payload.pageNo]: {
					_meta: { hasFooter: { $set: action.payload.isEnabled } },
				},
			})
		case types.CHANGE_LAYOUT:
			return update(state, {
				[action.payload.pageNo]: {
					_meta: { layout: { $set: action.payload.layout } },
				},
			})
		default:
			return state
	}
}

export default pagesReducer
