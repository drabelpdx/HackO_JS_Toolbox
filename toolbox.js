//###### TOOLBOX ##########
var toolbox = {};

(function(exports) {

exports.triangleLoop = function(){
    for(var i = 1; i < 8; i++){
    console.log('#'.repeat(i));
    }
}

exports.chessBoard = function(){
    var n = 8;
    for(var i = 1; i < n+1; i++){
        if(i%2 === 0){
            console.log(' #'.repeat(n/2) + '\n');
        } else
        {
            console.log('# '.repeat(n/2) + '\n');
        }
    }
}
   
exports.fizzBuzz = function(){
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

exports.mathMin = function(a, b){
    return a < b ? a : b;
}

exports.myRecursion = function(number){
    number = Math.abs(number);
    if(number === 0){
        return true;
    } else if (number === 1){
        return false;
    } else {
        return this.myRecursion(number-2);
    }
}

exports.beanCount = function(str, char){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === char){
            count ++;
        }
    }
    return count;
}

exports.regCount = function(str, char){
    return (str.match(new RegExp(char, "g"))||[]).length;
}

exports.regCount2 = function(str){
    return function(char){
        return (str.match(new RegExp(char, "g"))||[]).length;
    };
}

exports.isPrime = function(number){
    for(var i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

exports.range = function(a, b, c){
    var myRange =[];
    for(var i = a; i <= b; c != null ? i = i + c : i++){
        myRange.push(i);
    }
    return myRange;
}

exports.sum = function(arr){
    var mySum = 0;
    for(var i = 0; i< arr.length; i++){
        mySum += arr[i];
    }
    return mySum;
}

exports.reverseArray = function(arr){
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr;
}

exports.reverseArrayInPlace = function(arr){
    var count = Math.floor(arr.length/2);
    var counts = arr.length - 1;
    for(var i = 0; i< count; i++){
        var hold = arr[counts - i];
        arr[counts - i] = arr[i];
        arr[i] = hold;
    }
    return arr;
}

exports.numberOfArguments = function(){
    var item;
    var arr = []; 
    for(var i = 0; i < this.numberOfArguments.arguments.length; i++){
        item = this.numberOfArguments.arguments[i];
        if(typeof item == 'number'){
            var x = Math.sqrt(item);
            arr.push(x);
        } else {
            console.log(item);
        }
    }
    return arr;
}

exports.arrayCompare = function(arr){
    for(var i = 1; i < this.arrayCompare.arguments.length; i++){
        var item = this.arrayCompare.arguments[i];
        if(arr.indexOf(item) !== -1){
            console.log(item + " is in the array.");
        } else {
            console.log(item + " is NOT in the array.");
        }
    }
}

exports.deepEqual = function(x, y){
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
        if (! this.deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else if (x !== y)
    return false;
  else
    return true;
}

exports.haveRead = function(lib){
    var read = "";
    var unread = "";
    for(obj in lib){
        if(lib[obj].readingStatus === true){
            if(read != ""){
                read += ", ";
            }
            read += lib[obj]["title"] + " by " + lib[obj]["author"];
        } else {
            if(unread != ""){
                unread += ", ";
            }
            unread += lib[obj]["title"] + " by " + lib[obj]["author"];
        }
    }
    return "Books you have read: " + read + ". \nBooks you have yet to read: " + unread + ".";
}


//exports.regCount = function(str, char){
//    return (str.match(new RegExp(char, "g"))||[]).length;
//}

//exports.regCount = function(str, char){
//    return (str.match(new RegExp(char, "g"))||[]).length;
//}

})(toolbox);

console.log(toolbox.triangleLoop());
console.log(toolbox.chessBoard());
console.log(toolbox.fizzBuzz());

console.log(toolbox.mathMin(3, 4));

console.log("My number is even: " + toolbox.myRecursion(-14));

console.log(toolbox.beanCount("The Bears backpacked to Boston.", "B"));

console.log(toolbox.regCount("The Bears backpacked to Boston.", "B"));

var findChar = toolbox.regCount2("The Bears backpacked to Boston.");
console.log(findChar("T"));

console.log(toolbox.isPrime(11));

console.log(toolbox.range(1, 10, 2));
console.log(toolbox.sum(toolbox.range(1, 10, 2)));

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(toolbox.reverseArray(arr));

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(toolbox.reverseArrayInPlace(arr2));

var a = 1;
var b = "cat";
var c = "mouse";
var d = 4;
console.log(toolbox.numberOfArguments(a, b, c, d));

console.log(toolbox.arrayCompare(arr, 3, "bambi", 5, "Mr. Toad"));

var obj = {here: {is: "an"}, object: 2};
console.log(toolbox.deepEqual(obj, obj)); // true
console.log(toolbox.deepEqual(obj, {here: 1, object: 2})); // false
console.log(toolbox.deepEqual(obj, {here: {is: "an"}, object: 2})); // true

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

console.log(toolbox.haveRead(library));



