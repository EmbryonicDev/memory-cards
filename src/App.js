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
  const [wrongCard, setWrongCard] = useState()

  // console.log(allCards)
  console.log(activeCards);

  function handleClick(text) {
    console.log(text + " icon clicked")
    setActiveCards(shuffleCards(activeCards));
    setActiveCards(prevState => prevState.map(card => {
      if (card.text === text && !card.selected) {
        setScore(prevState => prevState + 1);
        return { ...card, selected: true }
      } else if (card.text === text && card.selected) {
        setWrongCard(text);
        setGameOver(true);
      }
      return card
    }));
  }

  function startNewGame() {
    console.log('New Game')
    setAllCards(Cards());
    setActiveCards(allCards.slice(0, 6));
    setScore(0);
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
