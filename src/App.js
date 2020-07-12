import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const getRandomColor = () => {
  const randomNumber = () => Math.floor(Math.random() * 200) + 16;
  let rgb = [randomNumber(), randomNumber(), randomNumber()];
  console.log(rgb);
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
  console.log("rendered");
  return (
    <div className="App">
      <Header score={score} />
      <GameBoard
        squares={squares}
        scoreUp={() => setScore(score + 1)}
        gameOver={() => {
          squares = [...makeSquaresInfo(12)];
          setScore(0);
        }}
        score={score}
      />
      <Footer />
    </div>
  );
}

export default App;
