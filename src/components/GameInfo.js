import { useEffect, useState } from "react";

export default function GameInfo(props) {
  const [gameLevel, setGameLevel] = useState();
  const [remainingCards, setRemainingCards] = useState(9);
  const { selectedCards } = props;

  useEffect(() => {
    gameLevel > 1 &&
      setRemainingCards(6);
  }, [gameLevel])

  useEffect(() => {
    const clickedCards = selectedCards - 1;

    // Set Level
    clickedCards < 6 && setGameLevel(1);
    (clickedCards > 5 && clickedCards < 12) && setGameLevel(2);
    (clickedCards > 11 && clickedCards < 18) && setGameLevel(3);
    (clickedCards > 17 && clickedCards < 24) && setGameLevel(4);

    // set remaining cards
    setRemainingCards(prevState => prevState - 1)
  }, [selectedCards])

  return (
    <div className="gameInfo">
      <h1>Game Info</h1>
      <h2>Level: {gameLevel}</h2>
      <h2>Remaining Cards Till {selectedCards - 1 < 18 ?
        "Next Level: " :
        "Game Completion: "}
        {remainingCards}</h2>
    </div>
  )
}