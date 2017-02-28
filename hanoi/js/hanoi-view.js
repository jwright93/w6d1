class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let i = 0; i < 4; i ++) {
      const $ul = $("<ul></ul>");

      for (var j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }



  render() {
    $('li').remove();

    for (let i = 0; i < 4; i ++) {
      const $ul = $("<ul></ul>");

      for (var j = 0; j < 3; j++) {
        if (this.game.towers[j][i]) {
          const $li = $(`<li>${this.game.towers[j][i]}</li>`);
          $li.data("pos", [i, j]);
          $ul.append($li);
        }
        else {
          const $li = $(`<li></li>`);
          $li.data("pos", [i, j]);
          $ul.append($li);
        }
      }
      this.$el.append($ul);
    }

  }

  clickTower() {

  }
}

module.exports = View;
