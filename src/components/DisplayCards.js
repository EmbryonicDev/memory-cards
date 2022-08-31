export default function DisplayCards(props) {
  const { icon, text, handleClick, selected } = props;

  return (
    <div
      className="cardDiv"
      onClick={handleClick}
      style={{ backgroundColor: selected && "blue" }}
    >
      <img src={icon} alt={text} />
      <h3>{text}</h3>
    </div>
  )
}