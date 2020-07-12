import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./GameSquare.module.css";
const GameSquare = ({ name, used, color, squareClicked }) => {
  const [elevation, setElevation] = useState(2);
  return (
    <Paper
      className={styles.paper}
      elevation={elevation}
      onClick={() => squareClicked(name)}
      onMouseLeave={() => setElevation(2)}
      onMouseEnter={() => setElevation(12)}
    >
      <div
        style={{
          backgroundColor: color,
          height: "100%",
          width: "100%",
        }}
      >
        {color}
      </div>
    </Paper>
  );
};

export default GameSquare;
