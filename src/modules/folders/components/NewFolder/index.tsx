import { connect } from 'react-redux'
import { createFolder } from '../../store/folder.actions'
import NewFolder, { IProps } from './NewFolder'

interface IPropsFromDispatch {
	createFolder?: (folderType: string, name: string) => void
}
const mapDispatchToProps = (dispath: any) => ({
	createFolder: (folderType: string, name: string) => dispath(createFolder(folderType, name)),
})

export default connect<IProps, IPropsFromDispatch, IProps>(
	undefined,
	mapDispatchToProps
)(NewFolder)
