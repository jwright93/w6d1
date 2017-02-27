class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let $square = $("li");
    $square.click( e => {
      let $pos = ($(e.currentTarget));
      this.makeMove($pos);
    });

  }

  makeMove($square) {
    const pos = $square.data("pos");
     const currentPlayer = this.game.currentPlayer;

     try {
       this.game.playMove(pos);
     } catch (e) {
       alert("Invalid move! Try again.");
       return;
     }

     $square.addClass(currentPlayer);

     if (this.game.isOver()) {
       // cleanup click handlers.
       this.$el.off("click");
       this.$el.addClass("game-over");

       const winner = this.game.winner();
       const $figcaption = $("<figcaption>");

       if (winner) {
         this.$el.addClass(`winner-${winner}`);
         $figcaption.html(`You win, ${winner}!`);
       } else {
         $figcaption.html("It's a draw!");
       }

       this.$el.append($figcaption);
     }

  }

  setupBoard() {

    for (let i = 0; i < 3; i++) {

      const $ul = $("<ul></ul>");
      for (let j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }

}

module.exports = View;
