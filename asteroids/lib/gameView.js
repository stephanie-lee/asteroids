/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    var that = this;
    console.log(that.ctx);
    setInterval( function() {that.game.draw(that.ctx); }, 10);
    setInterval(that.game.moveObjects.bind(that.game), 10);
  };

})();
