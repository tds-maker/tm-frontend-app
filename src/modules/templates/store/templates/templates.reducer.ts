import IAction from '../../../../store/IAction'
import Template from '../../models/Template'
import BaseReducer from '../../../../store/BaseReducer'
import { List } from 'immutable'

class TemplatesReducer extends BaseReducer<List<Template>> {
	public templatesFetched(state: Template, payload: any): List<Template> {
		return payload.map((template: any) => new Template(template))
	}
}

const reducer = new TemplatesReducer()
export default function(state: List<Template> = List<Template>(), action: IAction) {
	return reducer.call(state, action)
}
