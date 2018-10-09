import classNames from 'classnames'
import * as React from 'react'

import './selectList.scss'

export interface ISelectItem {
	value: any
	text: string
}

interface IProps {
	items: ISelectItem[]
	selectedValue?: object | string | number | boolean
	width?: string
	placeholder?: string
	onChange?: ((item: ISelectItem) => void)
}

interface IState {
	isOpen: boolean
	selectedItem?: ISelectItem
}

class SelectList extends React.PureComponent<IProps, IState> {
	private wrapperRef: any

	constructor(props: IProps) {
		super(props)
		this.state = {
			isOpen: false,
			selectedItem: props.items.find(x => x.value === props.selectedValue),
		}

		this.toggleOpenStatus = this.toggleOpenStatus.bind(this)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.setWrapperRef = this.setWrapperRef.bind(this)
		this.renderItem = this.renderItem.bind(this)
	}

	public componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside.bind(this))
	}

	public componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside.bind(this))
	}

	public componentWillReceiveProps(nextProps: IProps) {
		this.setState({
			selectedItem: nextProps.items.find(x => x.value === nextProps.selectedValue),
		})
	}

	public componentDidUpdate() {
		if (
			this.state.isOpen &&
			this.props.items &&
			this.props.items.length > 5 &&
			this.wrapperRef
		) {
			const itemsDOM = this.wrapperRef.getElementsByClassName('list')[0]
			const selectedItem = itemsDOM.getElementsByClassName('selected')[0]

			if (selectedItem) {
				itemsDOM.scrollTo(0, selectedItem.offsetTop)
			}
		}
	}

	public render() {
		const { width, placeholder, items } = this.props
		const { selectedItem, isOpen } = this.state
		const itemsClassnames = classNames({
			'big-list': items.length > 5,
			list: true,
		})

		const parentClassnames = classNames({
			open: isOpen,
			'tm-select': true,
		})

		return (
			<div className={parentClassnames} style={{ width }} ref={this.setWrapperRef}>
				<div className="current" onClick={this.toggleOpenStatus}>
					{!selectedItem ? (
						<span className="placeholder">{placeholder}</span>
					) : (
						<span className="text">{selectedItem.text}</span>
					)}
				</div>
				{isOpen ? <ul className={itemsClassnames}>{items.map(this.renderItem)}</ul> : null}
			</div>
		)
	}

	private setWrapperRef(node: any) {
		this.wrapperRef = node
	}

	private handleClickOutside(event: any) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isOpen) {
			this.setState({ isOpen: false })
		}
	}

	private toggleOpenStatus() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	private onItemSelected(item: ISelectItem) {
		this.setState({
			isOpen: false,
			selectedItem: item,
		})

		if (this.props.onChange) {
			this.props.onChange(item)
		}
	}

	private renderItem(item: ISelectItem, index: number) {
		const isSelected = this.state.selectedItem && this.state.selectedItem.value === item.value
		const itemClassnames = classNames({
			option: true,
			selected: isSelected,
		})
		return (
			<li
				key={index}
				className={itemClassnames}
				onClick={this.onItemSelected.bind(this, item)}>
				{item.text}
			</li>
		)
	}
}

export default SelectList
