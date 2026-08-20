import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialCards = [
    { id: 1, value: "🐶", isFlipped: false, isMatched: false },
    { id: 2, value: "🐱", isFlipped: false, isMatched: false },
    { id: 3, value: "🦊", isFlipped: false, isMatched: false },
    { id: 4, value: "🐸", isFlipped: false, isMatched: false },
    { id: 5, value: "🦊", isFlipped: false, isMatched: false },
    { id: 6, value: "🐸", isFlipped: false, isMatched: false },
    { id: 7, value: "🐶", isFlipped: false, isMatched: false },
    { id: 8, value: "🐱", isFlipped: false, isMatched: false },
  ];
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    if (cards.filter((c) => c.isMatched).length === cards.length) {
      alert(
        "🎉🎊 Congratulations! 🎊🎉\n\n" +
          "You matched every card!\n\n" +
          "Game Over!",
      );
    }
    const currentFlippedCards = cards.filter(
      (card) => card.isFlipped && !card.isMatched,
    );
    if (currentFlippedCards.length === 2) {
      //match - keep flipped
      if (currentFlippedCards[0].value === currentFlippedCards[1].value) {
        const newCards = cards.map((card) =>
          card.id === currentFlippedCards[0].id ||
          card.id === currentFlippedCards[1].id
            ? { ...card, isMatched: true }
            : card,
        );
        setCards(newCards);
      }
      //mis-match - flip back both cards
      else {
        const newCards = cards.map((card) =>
          card.id === currentFlippedCards[0].id ||
          card.id === currentFlippedCards[1].id
            ? { ...card, isFlipped: false }
            : card,
        );
        setTimeout(() => setCards(newCards), 1000);
      }
    }
  }, [cards]);

  function handleCardClick(cardId: number) {
    // Click one card - it flips and displays emoji

    // Card already flipped - ignore
    if (cards.find((card) => card.id === cardId)?.isFlipped) return;

    // Allow max two cards to be flipped at a time, if not already matched
    if (cards.filter((card) => card.isFlipped && !card.isMatched).length >= 2)
      return;

    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, isFlipped: true } : card,
    );
    setCards(newCards);
  }

  return (
    <>
      <main className="game">
        <h1>Memory Match</h1>
        <div className="game-board">
          {cards.map((card) => (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              {card.isFlipped ? card.value : "!"}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
