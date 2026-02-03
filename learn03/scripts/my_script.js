// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//
var name1 = "Meri";

// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
  //fix the errors
  var firstName = "Meredith",
    lastName = "Engel";
  document.getElementById("name").innerHTML = name1;
  document.getElementById("full-name").innerHTML = firstName + " " + lastName;
  var firstName = "Doctor";
  var name = "Beba";
  document.getElementById("first").innerHTML = name;
  document.getElementById("nick-name").innerHTML = firstName;
}

function scope() {
  //fix the errors
  let firstName = "Meredith",
    lastName = "Engel";
  const taxRate = 0.07; // This is a constant
  document.getElementById("global").innerHTML = name;
  document.getElementById("local").innerHTML = firstName;
  document.getElementById("tax").innerHTML = taxRate;
  //taxRate = 0.08;
  document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
  // Fix the errors
  let dog1 = "Ollie";
  dog2 = "Nessie";
  //dog2 = "Nessie";
  var dog3 = "Paisley";
  var dog2;
  document.getElementById("dog1").innerHTML = dog1;
  document.getElementById("dog2").innerHTML = dog2;
  document.getElementById("dog3").innerHTML = dog3;
  var dog2 = "John";
  document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
  // fix the errors
  const PI = 3.14;
  const dogs = ["Ollie", "Nessie", "Ory"];
  document.getElementById("doggos").innerHTML = dogs;
  dogs[0] = "Ollie Bear";
  document.getElementById("new-doggos").innerHTML = dogs;
  const breed = ["Shepherd", "Collie", "Bouvier"];
  document.getElementById("pi").innerHTML = PI;
  document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
  // create statements demonstrating the use of each operator
  let addition = 10 + 32;
  document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
  let subtraction = 50 - 11;
  document.getElementById("subtraction").innerHTML = "50 - 11 = " + subtraction;
  let multiplication = 10 * 10;
  document.getElementById("multiplication").innerHTML =
    "10 * 10 = " + multiplication;
  let exponent = 11 ** 11;
  document.getElementById("exponent").innerHTML = "11 ** 11 = " + exponent;
  let division = 33 / 3;
  document.getElementById("division").innerHTML = "33 / 3 = " + division;
  let modulus = 45 % 2;
  document.getElementById("modulus").innerHTML = "45 % 2 = " + modulus;
  let increment = 2;
  increment++;
  document.getElementById("increment").innerHTML = "2++ = " + increment;
  let decrement = 2;
  decrement--;
  document.getElementById("decrement").innerHTML = "2-- = " + decrement;
}

function assignments() {
  // create statements demonstrating the use of each assignment type
  var x = 10;
  document.getElementById("equals").innerHTML = "x = 10   =   " + "x = " + x;
  x += 1;
  document.getElementById("plus-equals").innerHTML = "x += 1 = " + x;
  x = 10;
  x -= 1;
  document.getElementById("minus-equals").innerHTML = "x -= 1 = " + x;
  x = 10;
  x *= 2;
  document.getElementById("times-equals").innerHTML = "x *= 2 = " + x;
  x = 10;
  x /= 2;
  document.getElementById("divide-equals").innerHTML = "x /= 2 = " + x;
  x = 10;
  x %= 3;
  document.getElementById("modulus-equals").innerHTML = "x %= 3 = " + x;
}

function dataTypes() {
  // create samples of each of the data types from the
  // index page and display them in the Data Types section
  const gems = ["Ruby", "Topaz", "Diamond"];
  document.getElementById("array").innerHTML = gems;
  const cakeingredients = {
    frosting: "chocolate",
    fruit: "strawberry",
    filling: "vanilla",
  };
  document.getElementById("object").innerHTML =
    "Cake ingredients. Frosting: " +
    cakeingredients.frosting +
    ". Fruit: " +
    cakeingredients.fruit +
    ". Filling: " +
    cakeingredients.filling +
    ".";
}
