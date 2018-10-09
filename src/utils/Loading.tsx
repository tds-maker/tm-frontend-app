import * as React from 'react'
interface IProps {
	propName?: any
	loadingTime?: boolean
}

const loadingHOC = ({ propName, loadingTime = false }: IProps) => <P extends {}>(
	WrappedComponent: React.ComponentClass<P> | React.StatelessComponent<P>
) => {
	type ResultProps = P & IProps
	const isEmpty = (prop: any) =>
		prop === null ||
		prop === undefined ||
		(prop.hasOwnProperty('length') && prop.length === 0) ||
		(prop.constructor === Object && Object.keys(prop).length === 0)

	return class LoadingHOC extends React.Component<ResultProps, {}> {
		public static displayName = `LoadingHOC(${WrappedComponent.displayName ||
			WrappedComponent.name})`
		private endTimer: number
		private startTimer: number

		public componentDidMount() {
			this.startTimer = Date.now()
		}

		public componentWillUpdate(nextProps: any) {
			if (!isEmpty(nextProps[propName])) {
				this.endTimer = Date.now()
			}
		}

		public render(): JSX.Element {
			const myProps = {
				loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2),
			}
			console.log(this)
			if (loadingTime) {
				console.log(
					`%c Loading Time %c ${myProps.loadingTime} %c`,
					'background-color: #f00; color: #fff; padding: 2px; font-weight: bold;',
					'background-color: #fcc; padding: 2px;',
					'background-color: #f00; color: #fff; padding: 2px; font-weight: bold;'
				)
			}
			return isEmpty(this.props[propName]) ? (
				<h1>Loading...</h1>
			) : (
				<WrappedComponent {...this.props} {...this.state} {...myProps} />
			)
		}
	}
}
export default loadingHOC
