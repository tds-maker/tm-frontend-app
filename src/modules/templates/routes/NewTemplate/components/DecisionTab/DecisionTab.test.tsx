import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Button } from "../../../../../../components";

import DecisionTab from "./DecisionTab";

configure({ adapter: new Adapter() });

describe("NewTemplate First Tab Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<DecisionTab />);
  });

  it("should render first tab component successfully", () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.children().length).toEqual(2);
  });

  it('each children must have "tab-col" classname', () => {
    wrapper.children().forEach((child: any) => {
      expect(child.prop("className")).toEqual("tab-col");
    });
  });

  describe("First column", () => {
    let firstColumn: any;

    beforeAll(() => {
      firstColumn = wrapper.childAt(0);
    });

    it("should have 3 children", () => {
      expect(firstColumn.children().length).toEqual(3);
    });

    it("should have h3 title", () => {
      expect(firstColumn.childAt(0).type()).toEqual("h3");
      expect(firstColumn.childAt(0).text()).toEqual("Start from scratch");
      expect(firstColumn.childAt(2).type()).toEqual(Button);
      expect(
        firstColumn
          .childAt(2)
          .childAt(0)
          .text()
      ).toEqual("Get Started");
    });

    it("should have paragraph", () => {
      expect(firstColumn.childAt(1).type()).toEqual("p");
      expect(firstColumn.childAt(1).text()).toEqual(
        "Start with a blank page and design new template."
      );
    });

    it("should have get started button", () => {
      expect(firstColumn.childAt(2).type()).toEqual(Button);
      expect(
        firstColumn
          .childAt(2)
          .childAt(0)
          .text()
      ).toEqual("Get Started");
    });

    it("should call changeTab when get-started button clicked", () => {
      const callMock = jest.fn();
      expect(callMock.mock.calls.length).toEqual(0);

      wrapper.setProps({ onButtonClicked: callMock });
      wrapper.find("#get-started").simulate("click");
      expect(callMock.mock.calls.length).toEqual(1);
      expect(callMock.mock.calls[0][0]).toEqual(1);
    });
  });

  describe("Second column", () => {
    let secondColumn: any;

    beforeAll(() => {
      secondColumn = wrapper.childAt(1);
    });

    it("should have 3 children", () => {
      expect(secondColumn.children().length).toEqual(3);
    });

    it("should have h3 title", () => {
      expect(secondColumn.childAt(0).type()).toEqual("h3");
      expect(secondColumn.childAt(0).text()).toEqual("Pick a ready one");
    });

    it("should have description paragraph", () => {
      expect(secondColumn.childAt(1).type()).toEqual("p");
      expect(secondColumn.childAt(1).text()).toEqual(
        "Choose and customize one of our ready-to-use templates."
      );
    });

    it('should have "have look" button', () => {
      expect(secondColumn.childAt(2).type()).toEqual(Button);
      expect(
        secondColumn
          .childAt(2)
          .childAt(0)
          .text()
      ).toEqual("Have a look!");
    });
  });
});
