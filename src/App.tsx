import "./App.css";
import type { Card } from "./types/Card";
import { useState } from "react";

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
  const [cards, setCards] = useState<Card[]>(initialCards);

  //functionality: flip the clicked card if the flip is allowed
  function handleCardClick(cardId: number) {
    //card already flipped - ignore
    //card already matched - ignore
    const clickedCard = cards.find((c) => c.id === cardId);
    if (clickedCard?.isMatched || clickedCard?.isFlipped) return;

    //two cards already flipped - ignore
    //we should ignore cards already matched - to keep playing the game after a successful match
    const flippedCards = cards.filter((c) => c.isFlipped && !c.isMatched);
    if (flippedCards.length >= 2) return;

    //else: flip the card
    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c,
    );
    setCards(newCards);

    // Evaluate the state after flipping the clicked card.
    checkMatch(newCards);
  }

  function checkMatch(cardsToCheck: Card[]) {
    const flippedCards = cardsToCheck.filter(
      (c) => c.isFlipped && !c.isMatched,
    );
    if (flippedCards.length === 2) {
      if (flippedCards[0].value === flippedCards[1].value) {
        //handle two cards match
        //keep the two cards displayed
        //console.log("Cards matched.");
        const matchedCards = cardsToCheck.map((c) =>
          c.id === flippedCards[0].id || c.id === flippedCards[1].id
            ? { ...c, isMatched: true }
            : c,
        );
        setCards(matchedCards);
        if (
          matchedCards.filter((c) => c.isMatched).length === matchedCards.length
        ) {
          alert(
            "🎉🎊 Congratulations! 🎊🎉\n\n" +
              "You matched every card!\n\n" +
              "Game Over!",
          );
        }
      } else {
        //console.log("Cards don't match.");
        //handle two cards didn't match
        //wait for a sec and then flip them back with out any other change
        const unmatchedCards = cardsToCheck.map((c) =>
          c.id === flippedCards[0].id || c.id === flippedCards[1].id
            ? { ...c, isFlipped: false }
            : c,
        );
        setTimeout(() => setCards(unmatchedCards), 1000);
      }
    }
  }

  return (
    <>
      <main className="game">
        <h1>Memory Match</h1>
        <div className="game-board">
          {cards.map((oneCard) => (
            <div
              className="card"
              key={oneCard.id}
              onClick={() => handleCardClick(oneCard.id)}
            >
              {oneCard.isFlipped ? oneCard.value : "!"}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
