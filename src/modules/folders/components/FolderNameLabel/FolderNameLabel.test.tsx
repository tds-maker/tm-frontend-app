import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import Folder from "../../models/Folder";

import FolderNameLabel from "./FolderNameLabel";

configure({ adapter: new Adapter() });

const folders: Folder[] = [
	new Folder({
		folderType: "template",
		name: "folder-1",
		isCurrent: false,
		_id: "folder-1-id",
		items: []
	}),
	new Folder({
		folderType: "template",
		name: "folder-2",
		parent: "folder-1-id",
		isCurrent: true,
		_id: "folder-2-id",
		items: []
	})
];

describe("Folder Name Label", () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = shallow(<FolderNameLabel folderType="template" selectedFolder={folders[1]} />);
	});

	it("should render successfully", () => {
		expect(wrapper.exists()).toEqual(true);
		expect(wrapper.type()).toEqual("div");
		expect(wrapper.text()).toEqual("folder-2");
	});

	it("should render as h3", () => {
		wrapper.setProps({ renderAs: "h3" });
		expect(wrapper.type()).toEqual("h3");
		expect(wrapper.text()).toEqual("folder-2");
	});
});
