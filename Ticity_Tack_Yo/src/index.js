const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./Node_Solution/game.js"); // require appropriate file

  $(() => {
    // Your code here
    const game = new Game();
    const $el = $("figure.ttt")
    const view = new View(game,$el);
  });
