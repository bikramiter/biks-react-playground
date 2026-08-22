import { cards } from "../data/cards";
import "./Game.css";
import Card from "./Card";
import { useState } from "react";

function Game() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  function handleCardClick(cardId: number) {
    //alreary selected card clicked - unselect the card
    //no card selected - select clicked card
    //a different card clicked - select this one and unselect the previous one
    cardId === selectedCardId
      ? setSelectedCardId(null)
      : setSelectedCardId(cardId);
  }
  return (
    <main className="game">
      <header className="game-header">
        <h1>Rule Breaker</h1>
        <p>Discover the hidden rule</p>
      </header>

      <section className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            selected={card.id === selectedCardId}
            handleClick={() => handleCardClick(card.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default Game;
