// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.
var song = "";
for (i = 99; i >= 0; i--) {
  if (i == 0) {
    song +=
      "No more bottles of beer on the wall, no more bottles of beer. <br> Go to the store and buy some more, 99 bottles of beer on the wall.";
  } else
    song +=
      i +
      " bottles of beer on the wall, " +
      i +
      " more bottles of beer. <br> Take one down and pass it around, " +
      (i - 1) +
      " bottles of beer on the wall. <br>";
}
document.getElementById("beer").innerHTML = song;
//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
var list = "";
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let x in months) {
  list += months[x] + " ";
}
document.getElementById("for-in").innerHTML = list;
// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
var word = "Hello";

let result = "";

for (let x of word) {
  result += x + "<br>";
}
document.getElementById("for-of").innerHTML = result;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let n = 1;
let numresult = "";
while (n < 51) {
  numresult += n + "<br>";
  n++;
}
document.getElementById("while").innerHTML = numresult;
