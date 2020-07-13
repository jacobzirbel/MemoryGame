import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
    setMessage("Wrong! - Try Again");
    setScore(0);
  };

  return (
    <div className="App">
      <Header message={message} score={score} />
      <GameBoard scoreUp={scoreUp} gameOver={gameOver} score={score} />
      <Footer />
    </div>
  );
};

export default App;
