export enum pageLayout {
	singleColumn = '1 Column',
	doubleColumn = '2 Columns',
	tripleColumn = '3 Columns',
	singleTopDoubleBottom = 'Columns 1-2',
	doubleTopSingleBottom = 'Columns 2-1',
	singleTopDoubleMiddleSingleBottom = 'Columns 1-2-1',
}

export enum metaType {
	header = 'header',
	footer = 'footer',
	text = 'text',
	bodyContainer = 'body-container',
	bodyPanel = 'body-panel',
	bodyPanelContainer = 'body-panel-container',
}
export enum moveState {
	none,
	canSort,
	canMove,
}
export enum metaDomType {
	div = 'div',
	label = 'label',
}
