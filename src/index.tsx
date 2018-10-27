import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/createStore'
import App from './App'
import Notify from './components/UI/Notify'
import './utils/string.prototypes'

ReactDOM.render(
	<Provider store={store}>
		<React.Fragment>
			<App />
			<Notify />
		</React.Fragment>
	</Provider>,
	document.getElementById('root')
)
