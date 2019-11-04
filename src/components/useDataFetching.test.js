import EnergyPanel from "./EnergyPanel";
import React from "react";
import { shallow, mount } from "enzyme";
import useDataFetching from "./useDataFetching";
import { testHook } from "../TestUtils";

describe("ExampleComponent", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("fetches data from server when server returns a successful response", done => {
    testHook(useDataFetching, "https://api.carbonintensity.org.uk/generation");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.carbonintensity.org.uk/generation"
    );
    done();
  });
});
