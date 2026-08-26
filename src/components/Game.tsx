import { cards } from "../data/cards";
import "./Game.css";
import Card from "./Card";
import { useState } from "react";
import { gameRules } from "../rules/rules";

function Game() {
  const [rule] = useState(
    () => gameRules[Math.floor(Math.random() * gameRules.length)],
  );
  const [feedback, setFeedback] = useState("");
  const [lives, setLives] = useState(5);
  const [foundCards, setFoundCards] = useState<number[]>([]);

  const correctCards = cards.filter(rule);
  // check if all correct cards found
  const allCardsIdentified = correctCards.every((card) =>
    foundCards.includes(card.id),
  );

  function correctCardSelected(cardId: number) {
    //set feedback
    setFeedback("correct");

    //handle game logic
    if (!foundCards.includes(cardId)) {
      setFoundCards((previousFoundCards) => [...previousFoundCards, cardId]);
    }
  }

  function wrongCardSelected() {
    //set feedback
    setFeedback("wrong");

    //decrease lives
    setLives((previousLives) => previousLives - 1);
  }

  function handleCardClick(cardId: number) {
    if (allCardsIdentified || lives === 0) return;
    // check if selected card is correct
    const cardIsCorrect = correctCards.some((card) => card.id === cardId);
    // if correct, keep selected and store in foundCards
    if (cardIsCorrect) {
      correctCardSelected(cardId);
    }
    // if incorrect, blink twice and revert to original state
    // decrease life by 1
    else wrongCardSelected();
  }

  return (
    <main className="game">
      <header className="game-header">
        <h1>Rule Breaker</h1>
        <p>Discover the hidden rule</p>
        <div className="lives">
          {Array.from({ length: lives }).map((_, index) => (
            <span key={index}>❤️</span>
          ))}
        </div>
        <div className="feedback">
          {feedback === "correct" && "✅ Correct!"}
          {feedback === "wrong" && "❌ Wrong!"}
        </div>
        {allCardsIdentified && (
          <div className="round-won">🎉 Round Complete!</div>
        )}
        {lives === 0 && <div className="round-lost">Sorry! You lost 😢</div>}
      </header>

      <section className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            selected={foundCards.includes(card.id)}
            handleClick={() => handleCardClick(card.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default Game;
