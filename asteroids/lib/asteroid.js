/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Asteroid = function(posHash){
    var optionsHash = {
      pos: posHash.pos,
      vel: Asteroids.Util.randomVec(5),
      COLOR: "#14dba4",
      RADIUS: 20,
      game: posHash.game
    };
    Asteroids.MovingObject.call(this, optionsHash);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
