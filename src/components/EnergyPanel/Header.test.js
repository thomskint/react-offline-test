import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import jsonData from "./../../../example_api_response.json";
describe("<Header/> Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Header classes={{ title: "" }} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test("should render header with dates", () => {
    const {
      data: { to, from }
    } = jsonData;
    const wrapper = mount(
      <Header from={from} to={to} classes={{ title: "" }} />
    );
    expect(wrapper.html()).toEqual(
      '<div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">Energy Generation Data UK</span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock">From: Mon, 12 Aug 2019 12:30:00 GMT - To: Mon, 12 Aug 2019 13:00:00 GMT</span></div></div>'
    );
    wrapper.unmount();
  });

  test("should render header with bad dates", () => {
    const {
      data: { to, from }
    } = jsonData;
    const wrapper = mount(
      <Header
        from={"Im a bad data"}
        to={"Im a worse date"}
        classes={{ title: "" }}
      />
    );
    expect(wrapper.html()).toEqual(
      '<div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">Energy Generation Data UK</span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock">From: Invalid Date - To: Invalid Date</span></div></div>'
    );
    wrapper.unmount();
  });
});
