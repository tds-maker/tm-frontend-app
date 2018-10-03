import * as React from "react";

import "./table.scss";

export interface IColumn {
	field: string;
	header: string;
	style?: object;
	className?: string;
}

interface IProps {
	columns?: IColumn[];
	data?: any[];
	maxHeight?: number;
}

export default class Table extends React.PureComponent<IProps> {
	public render() {
		const { columns = [], data = [], maxHeight } = this.props;
		const hasScroll = maxHeight && data.length * 23 >= maxHeight;

		return (
			<table className={hasScroll ? "tm-table fixed" : "tm-table"}>
				<thead className={hasScroll ? "has-scroll" : ""}>
					<tr>
						{columns.map((column, key) => {
							return (
								<th key={key} style={column.style} className={column.className}>
									{column.header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody style={{ maxHeight: maxHeight || "none" }}>
					{data.map((item, index) => {
						return this.renderTR(item, columns, index);
					})}
				</tbody>
			</table>
		);
	}

	private renderTR(item: any, columns: IColumn[], key: number) {
		return (
			<tr key={key}>
				{columns.map((column, index) => {
					return this.renderTD(item[column.field], index, column);
				})}
			</tr>
		);
	}

	private renderTD(item: any, key: number, column: IColumn) {
		return (
			<td className={column.className} style={column.style} key={key}>
				{item}
			</td>
		);
	}
}
