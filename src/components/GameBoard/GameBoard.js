import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import GameSquare from "../GameSquare/GameSquare";

const GameBoard = ({ squares, scoreUp, gameOver }) => {
  const [gameSquares, setGameSquares] = useState(squares);

  const squareClicked = (name) => {
    let clickedSquare = squares.find((square) => square.name === name);
    if (clickedSquare.used) {
      gameOver();
    } else {
      clickedSquare.used = true;
      setGameSquares([...gameSquares]);
      scoreUp();
    }
  };
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p={1}
      m={1}
      bgcolor="background.paper"
      css={{ maxWidth: 900, margin: "auto" }}
    >
      {gameSquares
        .sort(() => Math.random() - 0.5)
        .map((square) => {
          return (
            <GameSquare
              key={square.id}
              name={square.name}
              used={square.used}
              squareClicked={squareClicked}
            />
          );
        })}
    </Box>
  );
};

export default GameBoard;
