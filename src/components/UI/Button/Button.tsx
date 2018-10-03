import "./button.scss";

import classNames from "classnames";
import * as React from "react";

interface IProps {
	color?: string;
	className?: string;
	children?: any;
	id?: string;
	size?: string;
	onClick?: ((e: any) => void);
	disabled?: boolean;
	type?: string;
	style?: object;
	renderAs?: string;
}

const getClasses = (props: IProps) =>
	classNames({
		"tm-btn": true,
		"tm-btn-small": props.size && props.size === "small" ? true : false,
		[`tm-btn-${props.color}`]: props.color ? true : false,
		[props.className || ""]: true
	});

const renderAsAnchor = (props: IProps) => (
	<a id={props.id} onClick={props.onClick} style={props.style} className={getClasses(props)}>
		{props.children}
	</a>
);

const renderAsButton = (props: IProps) => (
	<button id={props.id} onClick={props.onClick} style={props.style} className={getClasses(props)} type={props.type || "button"}>
		{props.children}
	</button>
);

const Button: React.SFC<IProps> = (props: IProps) => {
	const renderAs = props.renderAs || "button";
	return renderAs === "button" ? renderAsButton(props) : renderAsAnchor(props);
};

export default Button;
