export default function Header(props) {
  const { score, highScore } = props;

  return (
    <div className="headerDiv">
      <div className="textInfo">
        <h1 className="headerText">Memory Game</h1>
        <button>i</button>
      </div>
      <div className="score">
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