import classNames from "classnames";
import * as React from "react";

import "./checkbox.scss";

interface IProps {
	label?: string;
	checked: boolean;
	onChange?: ((e: any) => void);
	id?: string;
	color?: string;
	rounded?: boolean;
}

const CheckBox: React.SFC<IProps> = ({ label, checked, onChange, id, color = "primary", rounded = false }: IProps) => {
	const className = classNames({
		"tm-checkbox": true,
		[color]: true,
		rounded
	});

	return (
		<label className={className}>
			<input id={id} type="checkbox" checked={checked} onChange={onChange} />
			<span>{label}</span>
		</label>
	);
};

export default CheckBox;
