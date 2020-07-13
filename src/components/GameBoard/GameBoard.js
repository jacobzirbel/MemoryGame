import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import GameSquare from "../GameSquare/GameSquare";

const getRandomColor = () => {
  // Min 16 so I don't have to worry about single digit hex numbers (1-f)
  // Max 216 so colors don't get too light
  const randomNumber = () => Math.floor(Math.random() * 200) + 16;
  let rgb = [randomNumber(), randomNumber(), randomNumber()];
  return "#" + rgb.map((e) => e.toString(16)).join("");
};

const makeSquaresInfo = (amount) => {
  const squares = [];
  while (amount--) {
    squares.push({
      id: amount,
      color: getRandomColor(),
      used: false,
      name: amount,
    });
  }
  return squares;
};

const GameBoard = ({ scoreUp, gameOver }) => {
  const [squares, setSquares] = useState([...makeSquaresInfo(12)]);

  const squareClicked = (name) => {
    const clickedSquare = squares.find((square) => square.name === name);
    if (clickedSquare.used) {
      setSquares([...makeSquaresInfo(12)]);
      gameOver();
    } else {
      clickedSquare.used = true;
      scoreUp();
    }
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      bgcolor="background.paper"
      css={{ maxWidth: 900, maxHeight: 860, margin: "30px auto" }}
    >
      {squares
        .sort(() => Math.random() - 0.5)
        .map((square) => {
          return (
            <GameSquare
              key={square.id}
              name={square.name}
              used={square.used}
              color={square.color}
              squareClicked={squareClicked}
            />
          );
        })}
    </Box>
  );
};

export default GameBoard;
