import actions from './actions'
import { IAction, IElement, IPage } from './interfaces'
import { metaDomType, metaType, pageLayout } from './enums'
import types from './types'
import selectors from './selectors'
import operations from './operations'

// import '../../../../../utils/string.prototypes'
const page: IPage = {
	_meta: {
		hasHeader: true,
		hasFooter: true,
		htmlDom: metaDomType.div,
		typeName: metaType.bodyContainer,
		layout: pageLayout.singleColumn,
		margin: { top: 0, bottom: 0, left: 40, right: 40 },
	},
	elements: [],
	style: {},
}
describe('Edit template tests', () => {
	describe('Actions', () => {
		it('Set element style action', () => {
			const fakeElement: IElement = {
				_id: 'fake-id',
				_meta: {
					typeName: metaType.text,
					htmlDom: metaDomType.div,
				},
				elements: [],
				style: {
					width: '10px',
				},
			}

			expect(actions.setElementStyle(fakeElement, { width: '20px' }, 'options')).toEqual({
				type: types.SET_ELEMENT_STYLE,
				payload: {
					element: fakeElement,
					style: { width: '20px' },
					options: 'options',
				},
			})
		})

		it('should create changeHeaderStatus action', () => {
			expect(actions.changeHeaderStatus(true, 1, page)).toEqual({
				type: types.CHANGE_HEADER_STATUS,
				payload: {
					isEnabled: true,
					pageNo: 1,
					page,
				},
			})
		})

		it('should create changeFooterStatus action', () => {
			expect(actions.changeFooterStatus(true, 1, page)).toEqual({
				type: types.CHANGE_FOOTER_STATUS,
				payload: {
					isEnabled: true,
					pageNo: 1,
					page,
				},
			})
		})

		it('should create changeLayout action', () => {
			expect(actions.changeLayout('fake-layout')).toEqual({
				type: types.CHANGE_LAYOUT,
				payload: 'fake-layout',
			})
		})

		it('should create startFetchingTemplate action', () => {
			expect(actions.startFetchingTemplate()).toEqual({
				type: types.START_FETCHING_TEMPLATE,
			})
		})

		it('should create endFetchingTemplate action', () => {
			expect(actions.endFetchingTemplate()).toEqual({
				type: types.END_FETCHING_TEMPLATE,
			})
		})

		it('should create initTemplate action', () => {
			expect(actions.initTemplate('fake-template')).toEqual({
				type: types.INIT_EDIT_TEMPLATE,
				payload: 'fake-template',
			})
		})
	})

	describe('Operations', () => {
		it('should run changeHeaderStatus operation', () => {
			const action: IAction = {
				type: types.CHANGE_HEADER_STATUS,
				payload: {
					isEnabled: true,
					pageNo: 1,
					page,
				},
			}
			const dispatch = jest.fn()
			const getState = jest.fn(() => ({}))
			selectors.activePageNumber = jest.fn(() => 1)
			selectors.currentPage = jest.fn(() => page)
			actions.changeHeaderStatus = jest.fn(() => action)

			operations.changeHeaderStatus(true)(dispatch, getState)

			expect(dispatch).toBeCalledTimes(1)
			expect(dispatch).toBeCalledWith(action)

			expect(getState).toBeCalledTimes(1)
			expect(getState).toHaveReturnedWith({})

			expect(selectors.activePageNumber).toBeCalledTimes(1)
			expect(selectors.activePageNumber).toBeCalledWith({})
			expect(selectors.activePageNumber).toHaveReturnedWith(1)

			expect(selectors.currentPage).toBeCalledTimes(1)
			expect(selectors.currentPage).toBeCalledWith({})
			expect(selectors.currentPage).toHaveReturnedWith(page)

			expect(actions.changeHeaderStatus).toBeCalledTimes(1)
			expect(actions.changeHeaderStatus).toBeCalledWith(true, 1, page)
		})

		it('should run changeFooterStatus operation', () => {
			const action: IAction = {
				type: types.CHANGE_FOOTER_STATUS,
				payload: {
					isEnabled: true,
					pageNo: 1,
					page,
				},
			}
			const dispatch = jest.fn()
			const getState = jest.fn(() => ({}))
			selectors.activePageNumber = jest.fn(() => 1)
			selectors.currentPage = jest.fn(() => page)
			actions.changeFooterStatus = jest.fn(() => action)

			operations.changeFooterStatus(true)(dispatch, getState)

			expect(dispatch).toBeCalledTimes(1)
			expect(dispatch).toBeCalledWith(action)

			expect(getState).toBeCalledTimes(1)
			expect(getState).toHaveReturnedWith({})

			expect(selectors.activePageNumber).toBeCalledTimes(1)
			expect(selectors.activePageNumber).toBeCalledWith({})
			expect(selectors.activePageNumber).toHaveReturnedWith(1)

			expect(selectors.currentPage).toBeCalledTimes(1)
			expect(selectors.currentPage).toBeCalledWith({})
			expect(selectors.currentPage).toHaveReturnedWith(page)

			expect(actions.changeFooterStatus).toBeCalledTimes(1)
			expect(actions.changeFooterStatus).toBeCalledWith(true, 1, page)
		})

		it('should run resizeBody operation', () => {
			const action: IAction = {
				type: types.SET_ELEMENT_STYLE,
				payload: {
					style: { marginLeft: '20px' },
				},
			}

			const element: IElement = {
				_id: 'fake-element',
				_meta: {
					htmlDom: metaDomType.div,
					typeName: metaType.bodyContainer,
				},
				elements: [],
				style: {},
			}

			const dispatch = jest.fn()
			const getState = jest.fn(() => ({}))
			selectors.activePageNumber = jest.fn(() => 1)
			selectors.currentPageBody = jest.fn((): IElement => element)
			actions.setElementStyle = jest.fn(() => action)

			operations.resizeBody({ marginLeft: '20px' })(dispatch, getState)

			expect(dispatch).toBeCalledTimes(1)
			expect(dispatch).toBeCalledWith(action)

			expect(getState).toBeCalledTimes(1)
			expect(getState).toReturnWith({})

			expect(selectors.activePageNumber).toBeCalledTimes(1)
			expect(selectors.activePageNumber).toBeCalledWith({})
			expect(selectors.activePageNumber).toReturnWith(1)

			expect(selectors.currentPageBody).toBeCalledTimes(1)
			expect(selectors.currentPageBody).toBeCalledWith({})
			expect(selectors.currentPageBody).toReturnWith(element)

			expect(actions.setElementStyle).toBeCalledTimes(1)
			expect(actions.setElementStyle).toReturnWith(action)
		})

		it('should run fetchTemplate opeartion', done => {
			const dispatch = jest.fn()

			operations.fetchTempate('fake-id')(dispatch)
			setTimeout(() => {
				expect(dispatch).toBeCalledTimes(3)
				expect(dispatch).toBeCalledWith(actions.startFetchingTemplate())
				expect(dispatch).toBeCalledWith(actions.endFetchingTemplate())
				done()
			}, 10)
		})

		afterEach(() => {
			jest.restoreAllMocks()
		})
	})
})
