import React from "react";
import styles from "./GameSquare.module.css";
const GameSquare = ({ name, used, squareClicked }) => {
  return (
    <div className={styles.div} onClick={() => squareClicked(name)}>
      {name} is {used ? "USED" : "NOT"}
    </div>
  );
};

export default GameSquare;
