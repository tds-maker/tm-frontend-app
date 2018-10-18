import * as sinon from 'sinon'
import HttpProvider from '../../../../utils/http.provider'
import { INIT_TEMPLATE, LOAD_TEMPLATE, TEMPLATE_FETCHED } from './template.actions'
import { initTemplate, watchLoadTemplate } from './template.sagas'

describe('Template sagas', () => {
	let sandbox: sinon.SinonSandbox

	beforeEach(() => {
		sandbox = sinon.createSandbox()
	})

	describe('Watch load template', () => {
		it('should call load', () => {
			const generator = watchLoadTemplate()
			expect(generator.next().value.FORK.args[0]).toEqual(LOAD_TEMPLATE)
		})

		it('should call fetch', () => {
			const generator = initTemplate({ type: INIT_TEMPLATE, payload: 'fake-id' })
			sandbox.stub(HttpProvider, 'get').resolves({ name: 'fake-template' })
			// @ts-ignore
			expect(generator.next().value.CALL.args[0]).toEqual('/templates/fake-id')
			// @ts-ignore
			expect(generator.next().value.PUT.action.type).toEqual(TEMPLATE_FETCHED)
		})
	})
})
