import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [gameLevel, setGameLevel] = useState(0);

  return (
    <div className="App">
      <Header
        score={score}
        highScore={highScore}
      />
      <Cards
        gameLevel={gameLevel}
      />
    </div>
  );
}

export default App;
