import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
}
export default App;
