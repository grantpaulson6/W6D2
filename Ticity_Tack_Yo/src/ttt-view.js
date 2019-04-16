class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('#container').on('click','#square', (e)=>{
      const $square = $(e.currentTarget);
      this.game.playMove($square.data('pos'));
      this.makeMove($square);
    });
  }
  
  makeMove($square) {
    // $square.css('background-color','white');
    $square.html(this.game.currentPlayer);
    $square.addClass("played");
    if(this.game.isOver()){
      // alert("game Over")
      this.gameOver();
      $(this.$el).append($(`<h1>${this.game.currentPlayer} wins</h1>`))
    }
  }

  gameOver(){
    $("li").addClass("game-over");
    $("li").each((i, el) => {
      if (el.textContent === this.game.currentPlayer) {
        $(el).css('background-color','green');
        $(el).css('color','white');
      } else {
        $(el).css('background-color','white');
        $(el).css('color','red');
      }
    })
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.attr('id', 'container');

    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>");
        $li.attr('id', 'square');
        $li.data('pos',[row, col])
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
