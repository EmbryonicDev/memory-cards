import { useEffect, useState } from "react";

export default function GameInfo(props) {
  const [gameLevel, setGameLevel] = useState();
  const [remainingCards, setRemainingCards] = useState();
  const { selectedCards } = props;

  useEffect(() => {
    const clickedCards = selectedCards - 1;

    // Set Level
    clickedCards < 6 && setGameLevel(1);
    (clickedCards > 5 && clickedCards < 12) && setGameLevel(2);
    (clickedCards > 11 && clickedCards < 18) && setGameLevel(3);
    (clickedCards > 17 && clickedCards < 24) && setGameLevel(4);

    // set remaining cards
    if (
      clickedCards === 0 ||
      clickedCards === 6 ||
      clickedCards === 12 ||
      clickedCards === 18
    ) { setRemainingCards(6) }
    if (
      clickedCards === 1 ||
      clickedCards === 7 ||
      clickedCards === 13 ||
      clickedCards === 19
    ) { setRemainingCards(5) }
    if (
      clickedCards === 2 ||
      clickedCards === 8 ||
      clickedCards === 14 ||
      clickedCards === 20
    ) { setRemainingCards(4) }
    if (
      clickedCards === 3 ||
      clickedCards === 9 ||
      clickedCards === 15 ||
      clickedCards === 21
    ) { setRemainingCards(3) }
    if (
      clickedCards === 4 ||
      clickedCards === 10 ||
      clickedCards === 16 ||
      clickedCards === 22
    ) { setRemainingCards(2) }
    if (
      clickedCards === 5 ||
      clickedCards === 11 ||
      clickedCards === 17 ||
      clickedCards === 23
    ) { setRemainingCards(1) }
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