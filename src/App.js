import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const makeSquaresInfo = (amount) => {
  let squares = [];
  while (amount-- > 0) {
    squares.push({
      id: amount,
      color: "black",
      used: false,
      name: amount,
    });
  }
  return squares;
};

const squares = [...makeSquaresInfo(12)];

function App() {
  const [score, setScore] = useState(0);
  console.log("rendered");
  return (
    <div className="App">
      <Header score={score} />
      <GameBoard
        squares={squares}
        scoreUp={() => setScore(score + 1)}
        gameOver={() => setScore(0)}
      />
      <Footer />
    </div>
  );
}

export default App;
