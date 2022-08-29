export default function DisplayCards(props) {
  const { icon, text, handleClick } = props;

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