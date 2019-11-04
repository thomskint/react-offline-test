import React from "react";
import { shallow, mount } from "enzyme";
import jsonData from "./../../../example_api_response.json";
import EnergyPanel from "./index";

import { act } from "react-dom/test-utils";

import useDataFetching from "./../useDataFetching";
describe("<EnergyPanel/> Component ", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<EnergyPanel />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it("when mounted the panel fetches chart data from server via the hook ", () => {
    const wrapper = mount(<EnergyPanel />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.carbonintensity.org.uk/generation"
    );
    wrapper.unmount();
  });

  it("shows an error message if there is fetch error", () => {
    fetch.mockReject(new Error("nasty error message occured"));
    const wrapper = mount(<EnergyPanel />);

    expect(wrapper.html()).toEqual(
      '<div class="MuiPaper-root MuiPaper-elevation1 MuiCard-root makeStyles-card-1 MuiPaper-rounded"><div class="MuiCardContent-root"><h6 class="MuiTypography-root MuiTypography-subtitle1">Loading...</h6></div></div>'
    );
    wrapper.unmount();
  });

  test("should render the loading message if its loading", () => {
    fetch.mockResponse(JSON.stringify(jsonData));
    const wrapper = mount(<EnergyPanel />);
    expect(wrapper.html()).toEqual(
      '<div class="MuiPaper-root MuiPaper-elevation1 MuiCard-root makeStyles-card-1 MuiPaper-rounded"><div class="MuiCardContent-root"><h6 class="MuiTypography-root MuiTypography-subtitle1">Loading...</h6></div></div>'
    );
    wrapper.unmount();
  });
});
