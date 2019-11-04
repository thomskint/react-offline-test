import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  graphStyle: {
    "& .ct-label": {
      fill: "black",
      fontWeight: "bold",
      fontSize: "1em",
      textTransform: "capitalize"
    }
  }
}));

const Chart = ({ generationmix }) => {
  const classes = useStyles();
  if (!generationmix)
    return <Typography variant="subtitle1">Error Creating Graph</Typography>;

  const data = {
    labels: generationmix.map(item => item.fuel),
    series: generationmix.map(item => item.perc)
  };

  const responsiveOptions = [
    [
      "screen and (min-width: 640px)",
      {
        chartPadding: 30,
        height: 500,
        labelOffset: 100,
        labelDirection: "explode",
        labelInterpolationFnc: function(value, idx) {
          return `${value} ${generationmix[idx].perc} %`;
        }
      }
    ],
    [
      "screen and (min-width: 1024px)",
      {
        labelOffset: 100,
        chartPadding: 20
      }
    ]
  ];

  const type = "Pie";
  return (
    <ChartistGraph
      className={classes.graphStyle}
      data={data}
      type={type}
      responsiveOptions={responsiveOptions}
    />
  );
};

PropTypes.Chart = {
  generationmix: PropTypes.array
};

export default Chart;
