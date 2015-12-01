// var sum = function() {
//   var nums = Array.prototype.slice.call(arguments);
//   var total = 0;
//
//   nums.forEach(function(argument) {
//     total += argument;
//   });
//
//   return total;
// };
// //
// // Function.prototype.myBind = function(caller) {
// //   var fn = this;
// //   var args = Array.prototype.slice.call(arguments);
// //
// //   console.log(this);
// //   return function(){
// //     fn.apply(caller, args.slice(1));
// //   };
// // };
// //
// // function Cat(name) {
// //   this.name = name;
// // }
// //
// // Cat.prototype.says = function (sound) {
// //   console.log(this.name + " says " + sound + "!");
// // };
// //
// // var markov = new Cat("Markov");
// // var breakfast = new Cat("Breakfast");
// //
// // // markov.says("meow");
// // // Markov says meow!
// //
// // markov.says.myBind(breakfast, "meow")();
// // // Breakfast says meow!
//
// // markov.says.myBind(breakfast)("meow");
// // Breakfast says meow!
//
// // var notMarkovSays = markov.says.myBind(breakfast);
// // notMarkovSays("meow");
// // Breakfast says meow!
// //
// // function hello(){
// //   console.log("hello from " + this.name);
// // }
// //
// // function Cat(name){
// //   this.name = name;
// // }
// //
// // var cat = new Cat("Gizmo");
// //
// //
// // var bound = hello.myBind(cat);
// //
// // bound();
// //
// // hello.bind(cat)();
//
// var curriedSum = function(numArgs) {
//   var numbers = [];
//
//   function _curriedSum(number) {
//     numbers.push(number);
//
//     if (numbers.length === numArgs) {
//       var sum = 0;
//
//       numbers.forEach(function(element) {
//         sum += element;
//       });
//
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   }
//
//   return _curriedSum;
// };
//
// var sum1 = curriedSum(4);
//
// return _curriedSum(5) numbers = [5]
//
// return _curriedSum(30) numbers = [5,30]
//
// return _curriedSum
//
// console.log(sum1(5)(30)(20)(1)); // => 56

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function(numArgs) {
  var args = [];
  var fn = this;
  // console.log(this);

  function _curry(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }

  }

  return _curry;
};

function Cat (name) {
  this.name = name;
}

Cat.prototype.meow = function (name1, name2, name3) {
  console.log(this.name, name1, name2, name3);
};

var cat = new Cat("hello");

cat.meow.curry(3)("gizmo")("steve")("hey");

console.log(sumThree.curry(3)(4)(20)(6));
