import ITemplateStore from "../modules/templates/store/ITemplateStore";

// import Template from '../modules/templates/models/Template'
// import Folder from '../modules/folders/models/Folder'


export default interface IStore {
	app: any
	user: any,
	template: ITemplateStore
}
