export default function NewGame(props) {
  const { wrongCard, startNewGame } = props;

  return (
    <div className="newGameDiv">
      <h1>GAME OVER...</h1>
      <h2>You Selected {wrongCard} Twice!</h2>
      <button onClick={startNewGame}>Start New Game</button>
    </div>
  )
}