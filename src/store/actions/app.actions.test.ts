import { addNotify, REMOVE_NOTIFY, removeNotify } from './app.actions'

describe('App Actions', () => {
	describe('Notifications', () => {
		it('should create ADD_NOTIFY', () => {
			const addNotifyAction = addNotify('fake-title', 'fake-message', 'error', 1000, 1)
			expect(addNotifyAction.type).toEqual('ADD_NOTIFY')
			expect(addNotifyAction.payload).toEqual({
				color: 'error',
				duration: 1000,
				id: 1,
				message: 'fake-message',
				title: 'fake-title',
			})
		})

		it('should create an action to remove notification', () => {
			const id = 123
			const expectedAction = {
				type: REMOVE_NOTIFY,
				payload: id,
			}
			expect(removeNotify(id)).toEqual(expectedAction)
		})
	})
})
