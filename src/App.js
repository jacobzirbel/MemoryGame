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

let squares = [...makeSquaresInfo(12)];

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Click a color to start");
  return (
    <div className="App">
      <Header message={message} score={score} />
      <GameBoard
        squares={squares}
        scoreUp={() => {
          setScore(score + 1);
          if (score === 11) {
            setMessage("You win!!");
          } else {
            setMessage(11 - score + " to go!");
          }
        }}
        gameOver={() => {
          setMessage("Wrong!");
          squares = [];
          setScore(-1);
          setTimeout(() => {
            squares = [...makeSquaresInfo(12)];
            setScore(0);
            setMessage("Try Again!");
          }, 1500);
        }}
        score={score}
      />
      <Footer />
    </div>
  );
}

export default App;
