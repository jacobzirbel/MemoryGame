import React from "react";
let highScore = 0;
const Header = ({ score }) => {
  highScore = score > highScore ? score : highScore;
  return (
    <div>
      Score: {score} High: {highScore}
    </div>
  );
};

export default Header;
