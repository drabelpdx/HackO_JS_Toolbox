//######## NATIVE METHOD #########

String.prototype.repeatify = function(num){
    var newStr ="";
    for(var i = 0; i< num; i++){
        newStr += this;
    }
    return newStr;
};


// ### Check 1 ###
String.prototype.repeatify = String.prototype.repeatify ||
    function(num){
        var newStr ="";
        for(var i = 0; i< num; i++){
            newStr += this;
        }
        return newStr;
};

// ### Check 2 ###
// function makeRepeatify(){
//      if(String.prototype.hasOwnProperty("repeatify")){
//         console.log("Already a method in this object");
//      } else {
//         String.prototype.repeatify = function(num){
//             var newStr ="";
//             for(var i = 0; i< num; i++){
//                 newStr += this;
//             }
//             return newStr;
//         };
//     }
// }

//makeRepeatify();

console.log('hello'.repeatify(3));
console.log(String.prototype.hasOwnProperty("repeatify"));


//######### PERSON and STUDENT #############

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     return this;
// }

// Person.prototype.age;
// Person.prototype.name = "";
// Person.prototype.describe = function(){
//     return ("Name: " + this.name + ", Age: " + this.age);
// };

// function Student(name, age) {
//   Person.call(this, name, age);
// }

// Student.prototype = new Person;
// Student.prototype.learn = function(subject){
//     return (this.name + " just learned " + subject);
// };

// var bob = new Person("Bob", 40);
// var tom = new Student("Tom", 20);

// console.log(bob);
// console.log(bob.describe());

// console.log(tom);
// console.log(tom.learn("English"));
// console.log(tom.describe());


//######### PERSON and STUDENT CONT #############

function Person(){
    return this;
}

function Student(name, age) {
  Person.call(this, name, age);
}

function Teacher(name, age) {
  Person.call(this, name, age);
}

Person.prototype.age;
Person.prototype.name = "";
Person.prototype.describe = function(){
    return ("Name: " + this.name + ", Age: " + this.age);
};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
    return this;
}

Student.prototype = new Person;
Student.prototype.learn = function(subject){
    return (this.name + " just learned " + subject);
};

Teacher.prototype = new Person;
Teacher.prototype.teach = function(subject){
    return (this.name + " teaches " + subject);
};

var bob = new Person;
var tom = new Student;
var david = new Teacher;

bob.initialize("Bob", 40);
tom.initialize("Tom", 20);
david.initialize("David", 50);


console.log(bob);
console.log(bob.describe());

console.log(tom);
console.log(tom.describe());
console.log(tom.learn("English"));

console.log(david);
console.log(david.describe());
console.log(david.teach("JavaScript"));




