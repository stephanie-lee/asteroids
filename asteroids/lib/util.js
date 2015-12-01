/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = function(){

  };

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    var Surrogate = function(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function(length) {
    return [(Math.random() * 2  - 1) * 10 / length,
           (Math.random() * 2 - 1) * 10/length];
  };
})();
