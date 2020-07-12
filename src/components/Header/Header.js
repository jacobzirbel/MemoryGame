import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import App from "../../App";

let highScore = 0;
const Header = ({ score, message }) => {
  highScore = score > highScore ? score : highScore;
  const pStyle = { width: "33%" };
  return (
    <div>
      <AppBar position="static">
        <h4>Memory Game!</h4>
        <Toolbar
          style={{
            display: "flex",
            flexFlow: "row no-wrap",
            justifyContent: "space-between",
          }}
        >
          <p style={pStyle}>Don't click the same color twice!</p>
          <p style={pStyle}>{message}</p>
          <p style={pStyle}>
            Score: {score} | High: {highScore}
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
