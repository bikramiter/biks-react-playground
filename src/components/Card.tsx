import type { GameCard } from "../types/game";

type CardProps = {
  card: GameCard;
  selected: boolean;
  handleClick: () => void;
};

function Card({ card, selected, handleClick }: CardProps) {
  return (
    <div
      className={`card card-${card.color}${selected ? " selected" : ""}`}
      onClick={handleClick}
    >
      <span className="card-number card-number-top">{card.number}</span>

      <span className="card-symbol">{card.symbol}</span>

      <span className={`card-shape shape-${card.shape}`}>{card.shape}</span>

      <span className="card-number card-number-bottom">{card.number}</span>
    </div>
  );
}

export default Card;
