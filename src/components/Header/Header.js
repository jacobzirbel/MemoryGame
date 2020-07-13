import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

let highScore = 0;

const Header = ({ score, message }) => {
  highScore = score > highScore ? score : highScore;
  const flexItemStyle = { width: "33%" };
  const toolbarStyle = {
    display: "flex",
    flexFlow: "row no-wrap",
    justifyContent: "space-between",
    width: "100%",
  };

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4">Memory Game!</Typography>
        <Toolbar>
          <Typography variant="body2" style={toolbarStyle}>
            <span style={flexItemStyle}>Don't click the same color twice!</span>
            <span style={flexItemStyle}>{message}</span>
            <span style={flexItemStyle}>
              Score: {score} | High: {highScore}
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
