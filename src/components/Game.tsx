import { cards } from "../data/cards";
import "./Game.css";

function Game() {
  return (
    <main className="game">
      <header className="game-header">
        <h1>Rule Breaker</h1>
        <p>Discover the hidden rule</p>
      </header>

      <section className="board">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <span className="card-symbol">{card.symbol}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Game;
