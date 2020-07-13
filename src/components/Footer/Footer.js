import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "45px",
    lineHeight: "45px",
    textAlign: "start",
    backgroundColor: "#3f51b5",
  };
  return (
    <Typography variant="subtitle2" style={footerStyle}>
      <span style={{ margin: "0 10px" }}>By Jacob Zirbel: A Programmer</span>
    </Typography>
  );
};

export default Footer;
