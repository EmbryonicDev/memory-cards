export default function gameWon(props) {
  const { startNewGame } = props;

  return (
    <div className="gameWonDiv">
      <h1>Congratulation! You Won the Game</h1>
      <button onClick={startNewGame}>Start New Game</button>
    </div>
  )
}