/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
    // console.log(this.asteroids);
  };

  Game.NUM_ASTEROIDS = 20;
  Game.DIM_X = 1000;
  Game.DIM_Y = 1000;

  Game.prototype.addAsteroids = function(){
    var that = this;

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition(), game: that}));
    }
  };

  Game.prototype.randomPosition = function(){
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;
    return [x, y];
  };

  Game.prototype.draw = function(ctx){
    // console.log(this);
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });

  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {

      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var newX = pos[0] > 1000 ? pos[0] % 1000 : pos[0];
    var newY = pos[1] > 1000 ? pos[1] % 1000 : pos[1];

    newX = newX < 0 ? newX + 1000 : newX;
    newY = newY < 0 ? newY + 1000 : newY;

    return [newX, newY];

  };

})();
