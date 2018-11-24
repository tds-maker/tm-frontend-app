import types from '../../types'
import { metaType } from '../../enums'
import { IAction, IElement, IElementsReducer } from '../../interfaces'
import update from 'immutability-helper'

const findSubElements = (element: IElement, stateElements: any): { [key: number]: IElement } => {
	const response = {}
	for (const elementId of element.elements) {
		const subElement = stateElements[elementId]
		response[elementId] = subElement
	}

	return response
}

const updateLayoutElements = (state: any, currentElements: any, nextElements: any) => {
	let response = { ...state }
	for (const newContainerElement of nextElements) {
		// Set Sub elements
		if (
			typeof newContainerElement === 'object' &&
			newContainerElement._meta.typeName === metaType.bodyPanelContainer
		) {
			response = updateLayoutElements(response, currentElements, newContainerElement.elements)
		}

		if (currentElements[newContainerElement._id]) {
			response = update(response, {
				byId: {
					[newContainerElement._id]: { style: { $set: newContainerElement.style } },
				},
			})
		} else {
			if (newContainerElement.elements) {
				newContainerElement.elements = newContainerElement.elements.map((element: any) => {
					if (typeof element === 'object') {
						return element._id
					} else {
						return element
					}
				})
			}
			response = {
				...response,
				byId: {
					...response.byId,
					[newContainerElement._id]: newContainerElement,
				},
				allIds: [...response.allIds, newContainerElement._id],
			}
		}
	}
	return response
}

const changeLayoutElements = (state: IElementsReducer, action: IAction) => {
	const currentBodyContainer = state.byId[`bc-${action.payload.pageNo}`]
	const currentBodyContainerElements = findSubElements(currentBodyContainer, state.byId)

	const nextBodyContainer = action.payload.layoutBody
	const nextBodyContainerElements = nextBodyContainer.elements

	// Find body container elements
	let newState = update(state, {
		byId: {
			[`bc-${action.payload.pageNo}`]: {
				style: { $set: action.payload.layoutBody.style },
				elements: { $set: action.payload.layoutBody.elements.map((x: any) => x._id) },
			},
		},
	})

	newState = updateLayoutElements(
		newState,
		currentBodyContainerElements,
		nextBodyContainerElements
	)

	return newState
}

const changeHeaderFooterStatus = (
	state: IElementsReducer,
	action: IAction,
	headerOrFooter: string
): IElementsReducer => {
	const { pageNo, isEnabled, page } = action.payload
	const newMargin = {
		[headerOrFooter === 'header' ? 'marginTop' : 'marginBottom']: isEnabled
			? '0px'
			: `${page._meta.margin[headerOrFooter === 'header' ? 'top' : 'bottom']}px`,
	}
	return update(state, {
		byId: {
			[`bc-${pageNo}`]: { style: { $merge: newMargin } },
		},
	})
}

const elementsReducer = (state: IElementsReducer, action: IAction): IElementsReducer | {} => {
	switch (action.type) {
		case types.INIT_EDIT_TEMPLATE:
			const data = action.payload
			return {
				...data.design!.elements,
			}
		case types.SET_ELEMENT_STYLE:
			return update(state, {
				byId: {
					[action.payload.element._id]: { style: { $merge: action.payload.style } },
				},
			})
		case types.UPDATE_ELEMENT_VALUE:
			return update(state, {
				byId: {
					[action.payload.element._id]: { value: { $set: action.payload.value } },
				},
			})
		case types.CHANGE_HEADER_STATUS:
			return changeHeaderFooterStatus(state, action, 'header')
		case types.CHANGE_FOOTER_STATUS:
			return changeHeaderFooterStatus(state, action, 'footer')
		case types.CHANGE_LAYOUT:
			return changeLayoutElements(state, action)
		case types.ADD_ELEMENT:
			const newElement = action.payload as IElement
			return update(state, {
				byId: {
					[newElement._meta.containerId]: { elements: { $push: [newElement._id] } },
					$merge: {
						[newElement._id]: { ...newElement },
					},
				},
				allIds: { $push: [newElement._id] },
			})
		case types.CHANGE_ELEMENT_CONTAINER:
			const element = action.payload.element as IElement
			const newContainerId = action.payload.newContainerId
			const indexOfPrevContainer = state.byId[element._meta.containerId].elements.indexOf(
				element._id
			)
			return update(state, {
				byId: {
					[element._meta.containerId]: {
						elements: { $splice: [[indexOfPrevContainer, 1]] },
					},
					[newContainerId]: { elements: { $push: [element._id] } },
					[element._id]: {
						style: { $merge: element.style },
						_meta: { containerId: { $set: newContainerId } },
					},
				},
			})
		default:
			return state || {}
	}
}

export default elementsReducer
