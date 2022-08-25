export default function Header(props) {
  const { score, highScore } = props;

  return (
    <div className="headerDiv">
      <h1 className="headerText">Memory Game</h1>
      <button className="instructions">i</button>
      <div className="score">
        <h3>Current Score</h3>
        <h3>{score}</h3>
      </div>
      <div className="score">
        <h3>High Score</h3>
        <h3>{highScore}</h3>
      </div>
    </div>
  )
}