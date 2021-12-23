import { initProvider } from '../../utils/http.provider'

export interface IUserStore {
	firstName: string
	lastName: string
	token: string
}

const defaultState: IUserStore = {
	firstName: 'Melih',
	lastName: 'Korkmaz',
	token:
		'',
}

// Change this
initProvider(defaultState.token)

export default function(state = defaultState, action: any = {}): IUserStore {
	switch (action.type) {
		default:
			return state
	}
}
