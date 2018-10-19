import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/icons.scss'
import './assets/css/style.scss'
import NewTemplate from './modules/templates/routes/NewTemplate'
import EditTemplate from './modules/templates/routes/EditTemplate/EditTemplate'

export default class App extends React.Component {
	public render() {
		return (
			<Router>
				<Switch>
					<Route exact={true} path="/templates/new" component={NewTemplate} />
					<Route
						exact={true}
						path="/templates/edit-template/:id"
						component={EditTemplate}
					/>
				</Switch>
			</Router>
		)
	}
}
