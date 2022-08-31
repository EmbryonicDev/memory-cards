import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import DisplayCards from "./components/DisplayCards";
import Header from "./components/Header";
import NewGame from "./components/NewGame";
import { shuffleCards } from "./functions";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [gameLevel, setGameLevel] = useState(0);
  const [allCards, setAllCards] = useState(Cards());
  const [activeCards, setActiveCards] = useState(allCards.slice(0, 6));
  const [gameOver, setGameOver] = useState(false);
  const [wrongCard, setWrongCard] = useState();
  const [scoreIncrement, setScoreIncrement] = useState(1);

  useEffect(() => {
    const selectedCards = activeCards.filter(card => card.selected).length;

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

  function handleClick(text) {
    console.log(text + " icon clicked")
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
    console.log('New Game')
    setActiveCards(allCards.slice(0, 6));
    setScore(0);
    setScoreIncrement(1);
    setGameOver(false);
  }

  const cardObjects = activeCards.map(card => {
    return (
      <DisplayCards
        icon={card.icon}
        selected={card.selected}
        text={card.text}
        handleClick={() => handleClick(card.text)}
        key={card.text}
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
          !gameOver ?
            cardObjects :
            <NewGame
              wrongCard={wrongCard}
              highScore={highScore}
              startNewGame={startNewGame}
            />
        }
      </div>
    </div>
  );
}

export default App;
