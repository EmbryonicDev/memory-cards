import { useState } from "react";

export default function Header(props) {
  const [showInstruction, setShowInstructions] = useState(false);
  const { score, highScore } = props;

  function handleMouseOver() {
    setShowInstructions(true);
  }

  function handleMouseOut() {
    setShowInstructions(false);
  }

  return (
    <div className="headerDiv">
      <div className="textInfo">
        <h1 className="headerText">Memory Game</h1>
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >?</button>
        {
          showInstruction &&
          <div className="instructions">
            <ul>
              <li>Each icon can be selected only once</li>
              <li>After selecting all icons in level 1 you will progress to level 2</li>
              <li>Each new level will contain all previously selected cards, as well as 6 new cards</li>
              <li>As the game progresses, the score value for each selection will systematically increase</li>
              <li>Complete all 4 levels to win the game</li>
            </ul>
          </div>
        }
      </div>
      <div className="score currentScore">
        <h2>Current Score</h2>
        <h2>{score}</h2>
      </div>
      <div className="score">
        <h2>High Score</h2>
        <h2>{highScore}</h2>
      </div>
    </div>
  )
}