import IAction from '../IAction'

export const ADD_NOTIFY = 'ADD_NOTIFY'
export const REMOVE_NOTIFY = 'REMOVE_NOTIFY'

export function addNotify(
	title: string,
	message: string,
	color: string,
	duration: number = 4000,
	id = 0
): IAction {
	id = id > 0 ? id : Date.now()
	return { type: ADD_NOTIFY, payload: { title, message, color, id, duration } }
}

export function removeNotify(id: number): IAction {
	return {
		type: REMOVE_NOTIFY,
		payload: id,
	}
}
