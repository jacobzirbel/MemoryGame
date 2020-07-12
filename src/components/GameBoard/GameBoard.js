import React from "react";
import Box from "@material-ui/core/Box";
import GameSquare from "../GameSquare/GameSquare";

const GameBoard = ({ squares, scoreUp, gameOver }) => {
  //const [gameSquares, setGameSquares] = useState(squares);

  const squareClicked = (name) => {
    let clickedSquare = squares.find((square) => square.name === name);
    if (clickedSquare.used) {
      //  setGameSquares(gameSquares.map((e) => ({ ...e, used: false })));
      gameOver();
    } else {
      clickedSquare.used = true;
      //  setGameSquares([...gameSquares]);
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
