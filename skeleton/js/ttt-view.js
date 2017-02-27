class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const rowIdx = this.$el.find(".row").length;
    const $row = $("<ul>").addClass("row").addClass("group");
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const $square = $("<li>").addClass("square");
      $square.css("background-color", "grey" );
      $square.css({"border-color": "#C1E0FF", 
             "border-weight":"1px",
             "border-style":"solid"});
      $row.append($square);
    }
    this.$el.append($row);
  }
}

module.exports = View;
