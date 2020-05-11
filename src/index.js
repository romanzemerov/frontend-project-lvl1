import { userIdentification } from "./user-identification.js";
import gameLoop from "./game-loop.js";

const initGame = (game) => {
  const { getRules } = game;

  userIdentification();
  console.log(`Welcome to the Brain Games!`);
  console.log(`${getRules()}`);
  gameLoop(game);
};

export default initGame;
