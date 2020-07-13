import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = ({ score, message }) => {
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) setHighScore(score);

  const flexItemStyle = { width: "33%" };
  const flexContainerStyle = {
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
          <Typography variant="body2" style={flexContainerStyle}>
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
