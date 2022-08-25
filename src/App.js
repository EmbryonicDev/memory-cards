import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);

  return (
    <div className="App">
    </div>
  );
}

export default App;
