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
    setInterval( function() {that.game.draw(that.ctx); }, 10);
    setInterval(that.game.step.bind(that.game), 10);
    // console.log(that.game.asteroids);
    // setInterval(that.game.checkCollisions.bind(that.game), 10);

  };

})();
