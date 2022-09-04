import { useEffect, useState } from "react";

export default function GameInfo(props) {
  const [gameLevel, setGameLevel] = useState(1);
  const [remainingCards, setRemainingCards] = useState(6);
  const { selectedCards } = props;

  useEffect(() => {
    setRemainingCards(6);
  }, [gameLevel])

  useEffect(() => {
    const clickedCards = selectedCards - 1;

    // Set Level
    (clickedCards > 5 && clickedCards < 12) && setGameLevel(2);
    (clickedCards > 11 && clickedCards < 18) && setGameLevel(3);
    (clickedCards > 17 && clickedCards < 24) && setGameLevel(4);
    (clickedCards > 23 && clickedCards < 30) && setGameLevel(5);

    // set remaining cards
    clickedCards > 0 &&
      setRemainingCards(prevState => prevState - 1)
  }, [selectedCards])

  return (
    <div className="gameInfo">
      <h1>Game Info</h1>
      <h2>Level: {gameLevel}</h2>
      <h2>Remaining Cards Till {selectedCards - 1 < 24 ?
        "Next Level: " :
        "Game Completion: "}
        {remainingCards}</h2>
    </div>
  )
}