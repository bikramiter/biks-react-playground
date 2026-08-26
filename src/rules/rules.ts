import type { GameCard } from "../types/game";

export type CardRule = (card: GameCard) => boolean;

export const blueCardRule: CardRule = (card) => card.color === "blue";

export const numberThreeRule: CardRule = (card) => card.number === 3;

export const circleCardRule: CardRule = (card) => card.shape === "circle";

export const moonCardRule: CardRule = (card) => card.symbol === "🌙";

export const starCardRule: CardRule = (card) => card.shape === "star";

// colors

export const redCardRule: CardRule = (card) => card.color === "red";

export const greenCardRule: CardRule = (card) => card.color === "green";

export const yellowCardRule: CardRule = (card) => card.color === "yellow";

// numbers

export const numberOneRule: CardRule = (card) => card.number === 1;

export const numberTwoRule: CardRule = (card) => card.number === 2;

export const numberFourRule: CardRule = (card) => card.number === 4;

// shapes

export const squareCardRule: CardRule = (card) => card.shape === "square";

export const triangleCardRule: CardRule = (card) => card.shape === "triangle";

// symbols

export const sunCardRule: CardRule = (card) => card.symbol === "☀️";

export const boltCardRule: CardRule = (card) => card.symbol === "⚡";

export const heartCardRule: CardRule = (card) => card.symbol === "❤️";

export const gameRules: CardRule[] = [
  blueCardRule,
  redCardRule,
  greenCardRule,
  yellowCardRule,

  numberOneRule,
  numberTwoRule,
  numberThreeRule,
  numberFourRule,

  circleCardRule,
  squareCardRule,
  triangleCardRule,
  starCardRule,

  moonCardRule,
  sunCardRule,
  boltCardRule,
  heartCardRule,
];
