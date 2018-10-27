import { IBodyStore, IFooterStore, IHeaderStore, IOptionsStore, IPagesStore, IUndeRedoStore} from "../interfaces";

export const defaultHeaderState: IHeaderStore = {
	0: {
		_meta: {
			page: 0,
		},
		style: {
			height: '160px',
			overflow: 'hidden',
			position: 'relative',
		},
	},
}

export const defaultBodyState: IBodyStore = {
	1: {
		style: {
			marginTop: '0px',
			marginBottom: '0px',
			marginLeft: '40px',
			marginRight: '40px',
			flex: '1',
			position: 'relative',
		},
	},
}

export const defaultFooterState: IFooterStore = {
	0: {
		_meta: {
			page: 0,
		},
		style: {
			height: '100px',
			overflow: 'hidden',
			position: 'relative',
		},
	},
}

export const defaultHistoryState: IUndeRedoStore = {
	prevStates: [],
	nextStates: [],
}

export const defaultOptionsState: IOptionsStore = {
	activeToolbar: 'text',
	activePage: 1,
}

export const defaultPageState: IPagesStore = {
	1: {
		_meta: {
			pageNo: 1,
			hasDefaultHeader: true,
			hasHeader: true,
			hasDefaultFooter: true,
			hasFooter: true,
			margin: {
				top: 40,
				left: 40,
				right: 40,
				bottom: 40,
			},
		},
		style: {
			position: 'relative',
			width: '900px',
			height: '1273px',
			backgroundColor: '#fff',
			backgroundSize: 'cover',
			backgroundPosition: '0 0',
			backgroundRepeat: 'no-repeat',
			paddingTop: '1px',
			display: 'flex',
			flexDirection: 'column',
		},
	},
}