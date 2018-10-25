export default interface IAction {
	type: string;
	payload?: any;
	hasAudit?: boolean;
}
