import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const getRandomColor = () => {
  const randomNumber = () => Math.floor(Math.random() * 200) + 16;
  let rgb = [randomNumber(), randomNumber(), randomNumber()];
  return "#" + rgb.map((e) => e.toString(16)).join("");
};

const makeSquaresInfo = (amount) => {
  let squares = [];
  while (amount-- > 0) {
    squares.push({
      id: amount,
      color: getRandomColor(),
      used: false,
      name: amount,
    });
  }
  return squares;
};
console.log("first square");
let squares = [...makeSquaresInfo(12)];

const App = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Click a color to start");

  const scoreUp = () => {
    setScore(score + 1);
    if (score === 11) {
      setMessage("You win!!");
    } else {
      setMessage(11 - score + " to go!");
    }
  };
  const gameOver = () => {
    setMessage("Wrong!");
    squares = [];
    setScore(0);
    setTimeout(() => {
      squares = [...makeSquaresInfo(12)];
      setScore(0);
      setMessage("Try Again!");
    }, 1500);
  };

  return (
    <div className="App">
      <Header message={message} score={score} />
      <GameBoard
        squares={squares}
        scoreUp={scoreUp}
        gameOver={gameOver}
        score={score}
      />
      <Footer />
    </div>
  );
};

export default App;
