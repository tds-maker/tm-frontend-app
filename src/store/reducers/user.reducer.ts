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
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZha2V1c2VyaWQiLCJhY2NvdW50SWQiOiJBMTIzIiwiaWF0IjoxNTMwMTc3NDgyfQ.N73feinTiO8tuBvpLL5rMbLxWj7Odsp-DEJEQqzsn5w',
}

// Change this
initProvider(defaultState.token)

export default function(state = defaultState, action: any = {}): IUserStore {
	switch (action.type) {
		default:
			return state
	}
}
