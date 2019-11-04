import React from "react";
import EnergyPanel from "./components/EnergyPanel";
import Container from "@material-ui/core/Container";
const App = () => (
  <div className={"app-container"}>
    <Container>
      <EnergyPanel />
    </Container>
  </div>
);
export { App };
