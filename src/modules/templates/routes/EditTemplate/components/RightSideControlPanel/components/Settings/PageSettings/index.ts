import PageSettings from './PageSettings'
import IStore from '../../../../../../../../../store/IStore'
import { editTemplateOperations, editTemplateSelectors } from '../../../../../ducks'
import { connect } from 'react-redux'

const mapStateToProps = (state: IStore) => ({
	margin: editTemplateSelectors.currentPageMargin(state),
	hasHeader: editTemplateSelectors.hasHeader(state),
	hasFooter: editTemplateSelectors.hasFooter(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	changePadding: ({ value, position }: { value: number; position: string }) => {
		let styleKey = ''
		switch (position) {
			case 'top':
				styleKey = 'marginTop'
				break
			case 'right':
				styleKey = 'marginRight'
				break
			case 'bottom':
				styleKey = 'marginBottom'
				break
			case 'left':
				styleKey = 'marginLeft'
				break
		}
		const styles = { [styleKey]: `${value}px` }
		dispatch(editTemplateOperations.resizeBody(styles))
	},
	changeHeaderState: (isEnabled: boolean) =>
		dispatch(editTemplateOperations.changeHeaderStatus(isEnabled)),
	changeFooterState: (isEnabled: boolean) =>
		dispatch(editTemplateOperations.changeFooterStatus(isEnabled)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageSettings)
