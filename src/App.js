import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import DisplayCards from "./components/DisplayCards";
import Header from "./components/Header";
import NewGame from "./components/NewGame";
import GameWon from "./components/GameWon";
import { shuffleCards } from "./functions";
import Confetti from 'react-confetti';
import GameInfo from "./components/GameInfo";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [allCards, setAllCards] = useState(Cards());
  const [activeCards, setActiveCards] = useState(allCards.slice(0, 6));
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(true);
  const [wrongCard, setWrongCard] = useState();
  const [scoreIncrement, setScoreIncrement] = useState(1);
  const [selectedCards, setSelectedCards] = useState(0);

  useEffect(() => {
    setSelectedCards(activeCards.filter(card => card.selected).length + 1);

    // Game Won
    selectedCards === 24 && setGameWon(true);

    // Set score increments
    if (selectedCards >= 22) {
      setScoreIncrement(11)
    } else if (selectedCards >= 18) {
      setScoreIncrement(7)
    } else if (selectedCards >= 16) {
      setScoreIncrement(6)
    } else if (selectedCards >= 12) {
      setScoreIncrement(5)
    } else if (selectedCards >= 10) {
      setScoreIncrement(4)
    } else if (selectedCards >= 6) {
      setScoreIncrement(3)
    } else if (selectedCards >= 4) {
      setScoreIncrement(2)
    }

    // Add new cards as all are selected
    if (selectedCards === 6) {
      setActiveCards(shuffleCards([...activeCards, ...allCards.slice(6, 12)]));
    } else if (selectedCards === 12) {
      setActiveCards(shuffleCards([...activeCards, ...allCards.slice(12, 18)]));
    } else if (selectedCards === 18) {
      setActiveCards(shuffleCards([...activeCards, ...allCards.slice(18, 24)]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  useEffect(() => {
    localStorage.setItem('highScore', highScore)
  }, [highScore])

  function handleClick(text) {
    setActiveCards(shuffleCards(activeCards));
    setActiveCards(prevState => prevState.map(card => {
      if (card.text === text && !card.selected) {
        setScore(prevState => prevState + scoreIncrement);
        return { ...card, selected: true }
      } else if (card.text === text && card.selected) {
        setAllCards(Cards());
        setWrongCard(text);
        setGameOver(true);
      }
      return card
    }));
  }

  function startNewGame() {
    setActiveCards(allCards.slice(0, 6));
    score > highScore && setHighScore(score);
    setScore(0);
    setScoreIncrement(1);
    setGameOver(false);
    setGameWon(false);
  }

  const cardObjects = activeCards.map(card => {
    return (
      <DisplayCards
        icon={card.icon}
        selected={card.selected}
        text={card.text}
        handleClick={() => handleClick(card.text)}
        key={card.text}
        gameOver={gameOver}
        wrongCard={wrongCard}
      />
    )
  })

  return (
    <div className="App">
      <Header
        score={score}
        highScore={highScore}
      />
      <div className="board">
        {
          (!gameOver && !gameWon) &&
          <GameInfo
            selectedCards={selectedCards}
          />
        }
        {
          gameOver &&
          <NewGame
            wrongCard={wrongCard}
            highScore={highScore}
            startNewGame={startNewGame}
          />
        }
        {
          !gameWon &&
          <div className="activeCards">
            {cardObjects}
          </div>
        }
        {gameWon && <Confetti />}
        {
          gameWon &&
          <GameWon
            startNewGame={startNewGame}
          />
        }
      </div>
    </div>
  );
}

export default App;
