import { shallow } from "enzyme/build";
import Header from "./components/EnergyPanel/Header";
import React from "react";
import { App } from "./app";

describe("<App/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
