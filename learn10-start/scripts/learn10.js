function start() {
  // Math: https://www.w3schools.com/js/js_math.asp
  // Demonstrate the use of round, ceil, floor, trunc, sign
  // pow, min, and random and display to the appropriate paragraphs
  document.getElementById("round").innerHTML = Math.round(5.7);
  document.getElementById("ceil").innerHTML = Math.ceil(3.2);
  document.getElementById("floor").innerHTML = Math.floor(4.9);
  document.getElementById("trunc").innerHTML = Math.trunc(7.5);
  document.getElementById("sign").innerHTML = Math.sign(-2);
  document.getElementById("pow").innerHTML = Math.pow(3, 2);
  document.getElementById("min").innerHTML = Math.min(
    3,
    124,
    -5,
    12,
    -20,
    11,
    56,
    2,
    80,
  );
  document.getElementById("random").innerHTML = Math.random();

  // Random: https://www.w3schools.com/js/js_random.asp
  // create a random integer between 1 and 100 and display in the random2 paragraph
  document.getElementById("random2").innerHTML =
    Math.floor(Math.random() * 100) + 1;
  // Booleans: https://www.w3schools.com/js/js_booleans.asp
  // read the reference

  // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
  // demonstrate and explain the difference between == and === in the
  // comparisons paragraph
  document.getElementById("comparisons").innerHTML =
    "== compares two values by making them the same, but === compares the values as they are, without changing them. For instance, 5 == '5' is " +
    (5 == "5") +
    ", while 5 === '5' is " +
    (5 === "5") +
    ".";
  // Conditions: https://www.w3schools.com/js/js_if_else.asp
  // Read the conditions page
}
