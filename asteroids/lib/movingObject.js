/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObjects = Asteroids.MovingObject = function(optionsHash) {

    this.pos = optionsHash.pos;
    this.vel = optionsHash.vel;
    this.radius = optionsHash.RADIUS;
    this.color = optionsHash.COLOR;
    this.game = optionsHash.game;
  };

  MovingObjects.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

     ctx.arc(
       this.pos[0],
       this.pos[1],
       this.radius,
       0,
       2 * Math.PI,
       false
     );

   ctx.fill();
  };

  MovingObjects.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    console.log(this);
    this.pos = this.game.wrap(this.pos);
  };

}());
