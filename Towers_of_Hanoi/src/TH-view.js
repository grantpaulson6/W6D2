class View{
  constructor(game,rootEl){
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
    this.render();
    this.pile = null;
    this.clickTower();
  }

  setupTowers(){
    const $ul1 = $("<ul>");
    $ul1.addClass('tower')
    $ul1.attr('id', `tower-1`);
    for (let i = 1; i < 4; i++) {
      let $li = $('<li>');
      $li.addClass('disc');
      $li.attr('id', `disc-${i}`);
      $li.css('width', i*50);
      $li.data('size',i);
      $ul1.append($li);
    }
    this.rootEl.append($ul1)

    const $ul2 = $("<ul>");
    $ul2.addClass('tower');
    $ul2.attr('id', `tower-2`);
    this.rootEl.append($ul2)

    const $ul3 = $("<ul>");
    $ul3.addClass('tower');
    $ul3.attr('id', `tower-3`);
    this.rootEl.append($ul3)

  }

  clickTower(){
    $(".tower").on("click",e => {
      if (this.pile) {
        let $receivePile = $(e.currentTarget);
        let $receiveDisc = $receivePile.find('.disc:first-child');
        let $movingDisc = this.pile.find('.disc:first-child');
        if ($movingDisc[0] && (!$receiveDisc[0] || $movingDisc.data("size") < $receiveDisc.data("size"))) {
          let $transferdisc = $movingDisc.detach();
          $receivePile.prepend($transferdisc);
        } else {
          alert('you done screwed up')
        }
        this.pile = null;
      } else {
        this.pile = $(e.currentTarget)
      }
    })
  }

  render(){

  }
}
module.exports = View;