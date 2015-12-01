/* globals Asteroids */
(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(optionsHash) {

    this.pos = optionsHash.pos;
    this.vel = optionsHash.vel;
    this.radius = optionsHash.RADIUS;
    this.color = optionsHash.COLOR;
    this.game = optionsHash.game;
  };

  MovingObject.prototype.draw = function(ctx){
    // ctx.fillStyle = "FFFFFF";
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.stroke();
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

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollideWith = function(otherObject) {
    var xDiff = this.pos[0] - otherObject.pos[0];
    var yDiff = this.pos[1] - otherObject.pos[1];
    var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

    if (distance < (this.radius + otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    var currentGame = this.game;
    currentGame.remove(this);
    currentGame.remove(otherObject);
  };
}());
