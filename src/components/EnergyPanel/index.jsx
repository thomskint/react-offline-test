import React, { useState } from "react";
import useDataFetching from "./../useDataFetching";
import Header from "./Header";
import Chart from "./Chart";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 800,
    minHeight: 650
  },
  title: {
    color: "#89BD23"
  }
}));

const EnergyPanel = () => {
  const { loading, results, error } = useDataFetching(
    "https://api.carbonintensity.org.uk/generation"
  );
  const classes = useStyles();

  if (loading || error) {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subtitle1">
            {loading ? "Loading..." : error}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={classes.card}>
      {results.data && (
        <Header
          classes={classes}
          to={results.data.to}
          from={results.data.from}
        />
      )}
      <CardContent>
        {results.data && <Chart generationmix={results.data.generationmix} />}
      </CardContent>
    </Card>
  );
};

export default EnergyPanel;
