/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 30;
  Game.DIM_X = 1000;
  Game.DIM_Y = 1000;

  Game.prototype.addAsteroids = function(){
    var that = this;

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(), game: that
      }));
    }
  };

  Game.prototype.randomPosition = function(){
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;
    return [x, y];
  };

  Game.prototype.draw = function(ctx){
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
    var newX = pos[0] > Game.DIM_X + 40 ? pos[0] - (Game.DIM_X + 80) : pos[0];
    var newY = pos[1] > Game.DIM_Y + 40 ? pos[1] - (Game.DIM_Y + 80) : pos[1];

    newX = newX < -40 ? newX + Game.DIM_X + 80 : newX;
    newY = newY < -40 ? newY + Game.DIM_Y + 80 : newY;

    return [newX, newY];
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid){
      that.asteroids.forEach(function(otherAsteroid){
        if ((asteroid.isCollideWith(otherAsteroid)) &&
          (asteroid !== otherAsteroid)) {
            asteroid.collideWith(otherAsteroid);
        }
      });
    });
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);

    if (index > -1) {
      this.asteroids.splice(index, 1);
    }
  };

})();
