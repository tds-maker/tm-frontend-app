/* tslint:disable interface-name */
interface String {
	pxToNumber: () => number
}
/* tslint:enable interface-name */
String.prototype.pxToNumber = function() {
	return parseInt(this.replace('px', ''), 10)
}
