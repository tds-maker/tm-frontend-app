import * as React from 'react'
import Logo from '../../../assets/images/logo.svg'
import './headcontainer.css'

interface ICenterButtonsProps {
	onDesignButton: (e: React.MouseEvent) => void
	onCreateButton: (e: React.MouseEvent) => void
	onShareButton: (e: React.MouseEvent) => void
}
interface IRightButtonsProps {
	onSaveButton: (e: React.MouseEvent) => void
	onPreviewButton: (e: React.MouseEvent) => void
	onPublishButton: (e: React.MouseEvent) => void
}

export default class HeadContainer extends React.PureComponent<
	ICenterButtonsProps & IRightButtonsProps,
	any
> {
	public render() {
		return (
			<header className="header">
				<div className="container clearfix">
					<div className="head-left-col">
						<a className="logo">
							<img src={Logo} width={52} />
						</a>
						<a className="menu-btn">
							<i className="icon-view_headline" />
						</a>
						<div className="head-text">
							<h4>Wood Coating Template</h4>
							<p>Archive (v0.0) | English, Spanich, Turkish, Russian</p>
						</div>
					</div>
					<div className="head-mid-col text-center">
						<div className="main__tabs">
							<ul>
								<li className="active" onClick={this.props.onDesignButton}>
									Design
								</li>
								<li className="" onClick={this.props.onCreateButton}>
									Create
								</li>
								<li className="" onClick={this.props.onShareButton}>
									Share
								</li>
							</ul>
						</div>
					</div>
					<div className="head-right-col text-right">
						<a onClick={this.props.onSaveButton} className="btn btn-yellow">
							Save
						</a>
						<a onClick={this.props.onPreviewButton} className="btn btn-gray">
							Preview
						</a>
						<a onClick={this.props.onPublishButton} className="btn btn-blue">
							Publish
						</a>
					</div>
				</div>
				{this.props.children}
			</header>
		)
	}
}
