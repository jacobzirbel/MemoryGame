import React from "react";
import Box from "@material-ui/core/Box";
import GameSquare from "../GameSquare/GameSquare";

const GameBoard = ({ scoreUp, gameOver }) => {
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
      <GameSquare />
    </Box>
  );
};
export default GameBoard;
