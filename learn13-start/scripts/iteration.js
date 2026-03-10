/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = ["Super Mario", "Minecraft", "Pokemon", "Pac-Man", "Splatoon"];
var list = "";

for (const g of games) {
  list += g + " ";
}
document.getElementById("list").innerHTML = list;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set([
  "Enemy",
  "Skylines",
  "CanWeBeFriends",
  "Average",
  "Cycles",
]);

var list2 = "";
for (const s of songs) {
  list2 += s + " ";
}

document.getElementById("set1").innerHTML = list2;
// add two more songs to the set then display in the set2 paragraph
songs.add("Extravaganza ");
songs.add("Strad");

list2 = "";
for (const s of songs) {
  list2 += s + " ";
}
document.getElementById("set2").innerHTML = list2;
/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const address = new Map([
  ["John", "johnjames123.org"],
  ["Mary", "marysinger456.org"],
  ["Bob", "bobparsley789.org"],
  ["Hannah", "hannahjames246.org"],
  ["Fred", "fredmannor135.org"],
]);

var list3 = "";

address.forEach(function (value, key) {
  list3 += key + ": " + value + "<br>";
});

document.getElementById("map1").innerHTML = list3;

// add two new names and emails and display in map2 use the forEach() method

address.set("Gary", "garywarner680.org");
address.set("Kayla", "kaylawood579.org");

list3 = "";

address.forEach(function (value, key) {
  list3 += key + ": " + value + "<br>";
});

document.getElementById("map2").innerHTML = list3;
// get and display the email of one person, display in map3
list3 = address.get("John");

document.getElementById("map3").innerHTML = list3;
