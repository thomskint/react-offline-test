import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
const dateFormatter = dt => {
  try {
    return new Date(dt).toUTCString();
  } catch (e) {
    return "Incorrect Date";
  }
};
const Header = ({ to, from, classes }) => {
  return (
    <CardHeader
      className={classes.title}
      title={"Energy Generation Data UK"}
      subheader={`From: ${dateFormatter(from)} - To: ${dateFormatter(to)}`}
    />
  );
};

Header.propTypes = {
  to: PropTypes.string,
  from: PropTypes.string
};

export default Header;
