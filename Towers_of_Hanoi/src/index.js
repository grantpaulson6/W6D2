const HanoiGame = require('./solution/game.js');
const HanoiView = require('./TH-view.js');

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
  console.log("its working");
});
