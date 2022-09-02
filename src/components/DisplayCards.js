export default function DisplayCards(props) {
  const { icon, text, handleClick, selected, gameOver, wrongCard } = props;

  let style;

  if (selected && gameOver) style = { backgroundColor: '#4ade80' };
  if (text === wrongCard) style = { backgroundColor: 'red' };

  if (gameOver) {
    return (
      <div
        className="cardDiv"
        style={style}
      >
        <img src={icon} alt={text} />
        <h3>{text}</h3>
      </div>
    )
  } else {
    return (
      <div
        className="cardDiv"
        onClick={handleClick}
      >
        <img src={icon} alt={text} />
        <h3>{text}</h3>
      </div>
    )
  }
}