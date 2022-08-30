export default function NewGame(props) {
  const { wrongCard, highScore, startNewGame } = props;

  return (
    <div className="newGameDiv">
      <h1>GAME OVER...</h1>
      <h3>You Selected {wrongCard} Twice!</h3>
      <button onClick={startNewGame}>Start New Game</button>
    </div>
  )
}