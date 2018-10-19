import * as React from 'react'
import './toolbar.style.scss'

const Toolbar = (props: any) => (
	<div className="toolbar clearfix">
		<div className="toolbar-left clearfix">{props.children}</div>
		<div className="toolbar-right">
			<div className="group">
				<div className="dropdown toolbar-item translate">
					<span className="selected">Translate</span>
					<span className="arrow" />
				</div>
			</div>
			<div className="group" />
		</div>
	</div>
)

export default Toolbar
