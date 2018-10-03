import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import Notify from "./Notify";
import INotify from "./INotify";

configure({ adapter: new Adapter() });

describe("Notify Component", () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = shallow(<Notify />);
	});

	it("should render successfully", () => {
		expect(wrapper.exists()).toEqual(true);
		expect(wrapper.prop("className")).toEqual("tm-notify-container");
		expect(wrapper.children().length).toEqual(0);
	});

	it("should render notify message", () => {
		var notifications: INotify[] = [{ color: "error", id: 0, message: "fake-message", title: "fake-title" }];
		wrapper.setProps({ notifications: notifications });
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.childAt(0).prop("className")).toEqual("tm-notify error");
	});

	it("can render more than one notification", () => {
		var notifications: INotify[] = [{ color: "error", id: 0, message: "fake-message", title: "fake-title" }, { color: "error", id: 1, message: "fake-message", title: "fake-title" }];
		wrapper.setProps({ notifications: notifications });
		expect(wrapper.children().length).toEqual(2);
	});
});
