/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Asteroid = function(posHash){
    var optionsHash = {
      pos: posHash.pos,
      vel: Asteroids.Util.randomVec(1),
      COLOR: "#FF0000",
      RADIUS: 20,
      game: posHash.game
    };
    Asteroids.MovingObject.call(this, optionsHash);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
