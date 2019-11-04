import React from "react";
import { shallow, mount } from "enzyme";
import jsonData from "./../../../example_api_response.json";
import Chart from "./Chart";
import ChartistGraph from "react-chartist";
describe("<Chart/> Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test("should not render chartist if no data passed and show error", () => {
    const wrapper = mount(<Chart />);
    expect(wrapper.html()).toEqual(
      '<h6 class="MuiTypography-root MuiTypography-subtitle1">Error Creating Graph</h6>'
    );
    wrapper.unmount();
  });
  test("should render chartist graph", () => {
    const {
      data: { generationmix }
    } = jsonData;
    const wrapper = mount(<Chart generationmix={generationmix} />);
    expect(wrapper.find(ChartistGraph)).toBeTruthy();
    wrapper.unmount();
  });
});
