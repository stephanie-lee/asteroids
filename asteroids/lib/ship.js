/* globals Asteroids */

(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function() {


  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

})();
