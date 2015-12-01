// var Surrogate = function(){
// };
//
// var SuperClass = function(){
// };
//
// SuperClass.prototype.meow = function(){
//   console.log("meow");
// };
//
// var SubClass = function(){
//   console.log("hi");
// };



Function.prototype.inherits = function(superClass){
  var Surrogate = function(){};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// SubClass.inherits(SuperClass);
// var test = new SubClass;
// console.log(test);
// // test.meow();

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
