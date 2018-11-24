import * as React from 'react'
import DraggableHOC, { IDraggable } from '../../../Draggable/DraggableHOC'
import './content.css'
import defaults from '../../../../ducks/defaults'
import { IElement } from '../../../../ducks/interfaces'

interface INewElement {
	element: IElement
}
const NewTextElement = DraggableHOC({
	effectAllowed: 'copy',
})((props: INewElement & IDraggable) => {
	return (
		<div
			className="control-btn large"
			onDragStart={props.onDragStart}
			onDrag={props.onDrag}
			onDragEnd={props.onDragEnd}
			draggable={true}>
			<i className="icon-text_field text-yellow" />
			<p>Text field</p>
			<span>Used for input text</span>
		</div>
	)
})

export default function Content() {
	return (
		<React.Fragment>
			<ul className="tab-content-controls">
				<li className="active">INPUTS</li>
				<li>SMART FIELDS</li>
			</ul>
			<div className="main-tabs-content">
				<div className="tabs_content active" style={{ boxShadow: 'none' }}>
					<NewTextElement element={defaults.DefaultTextElement()} />
					<div className="control-btn large">
						<i className="icon-collections text-red" />
						<p>Image holder</p>
						<span>Used it for uploading product image</span>
					</div>
					<div className="control-btn large">
						<i className="icon-select_list text-blue" />
						<p>Select list</p>
						<span>Create select list</span>
					</div>
				</div>
				<div className="tabs_content" style={{ boxShadow: 'none' }}>
					<div className="control-btn small">
						<i className="icon-product_name text-red" />
						<p>Product name</p>
					</div>
					<div className="control-btn small">
						<i className="icon-product_number text-yellow" />
						<p>Product number</p>
					</div>
					<div className="control-btn small">
						<i className="icon-calendar text-gray" />
						<p>Publish date</p>
					</div>
					<div className="control-btn small">
						<i className="icon-revision text-blue" />
						<p>Revision number</p>
					</div>
					<div className="control-btn small">
						<i className="icon-document_number text-green" />
						<p>Page number</p>
					</div>
					<div className="control-btn small">
						<i className="icon-total_page" />
						<p>Total Page number</p>
					</div>
					<div className="shortcuts">
						<span>Shortcuts</span>
					</div>
					<div className="shortcuts-box">
						<span className="close" />
						<p>
							<span className="text-red">Product name:</span> #Product-Name#
						</p>
						<p>
							<span className="text-yellow">Product number:</span> #Product-Number#
						</p>
						<p>
							<span className="text-gray">Publish date:</span> #Publish-Date#
						</p>
						<p>
							<span className="text-blue">Revision number:</span> #Revision-Number#
						</p>
						<p>
							<span className="text-green">Page number:</span> #Page-No#
						</p>
						<p>
							<span className="text-black">Total page number name:</span> #Total-Page#
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
