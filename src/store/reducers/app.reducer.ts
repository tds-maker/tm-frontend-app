import config from '../../config'

import { ADD_NOTIFY, REMOVE_NOTIFY } from '../actions/app.actions'
import IAction from '../IAction'

export interface IAppStore {
	notifications: any[]
	languages: object
}

const defaultState: IAppStore = {
	notifications: [],
	languages: config.languages,
}

export default function(state: IAppStore = defaultState, action: IAction) {
	switch (action.type) {
		case ADD_NOTIFY:
			return Object.assign({}, state, {
				notifications: [
					...state.notifications,
					{
						title: action.payload.title,
						message: action.payload.message,
						color: action.payload.color,
						id: action.payload.id,
					},
				],
			})

		case REMOVE_NOTIFY:
			const indexOf = state.notifications.findIndex(x => x.id === action.payload)
			return Object.assign({}, state, {
				notifications: [
					...state.notifications.slice(0, indexOf),
					...state.notifications.slice(indexOf + 1),
				],
			})
		default:
			return state
	}
}
