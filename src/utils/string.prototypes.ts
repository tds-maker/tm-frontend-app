interface String { // tslint:disable-line interface-name
    pxToNumber: () => number;
}


String.prototype.pxToNumber = function (){
    return parseInt(this.replace('px', ''), 10);
}


