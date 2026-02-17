function start() {
  // print your name to the name heading
  document.getElementById("name").innerHTML = "David Salazar";
  /*
            read/watch the associated reference and complete the directions in the comments.

        */

  /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

  /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
  document.getElementById("add").innerHTML = '10 + "Dave" = ' + 10 + "Dave";

  /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

  // Demonstrate the use of toString() and print to the to-string paragraph
  let x = 123;
  document.getElementById("to-string").innerHTML = x.toString();
  // Demonstrate the use of toExponential() and print to the exponent paragraph
  let y = 456;
  document.getElementById("exponent").innerHTML = y.toExponential(2);
  // Demonstrate the use of toFixed() and print to the fixed paragraph
  let z = 12.67;
  document.getElementById("fixed").innerHTML = z.toFixed();
  // Demonstrate the use of toPrecision() and print to the precision paragraph
  let a = 2.356;
  document.getElementById("precision").innerHTML = a.toPrecision(2);
  // Demonstrate the use of parseFloat() and print to the float paragraph
  let b = 5.43;
  document.getElementById("float").innerHTML = parseFloat(b);
  // Demonstrate the use of parseInt() and print to the int paragraph
  document.getElementById("int").innerHTML = parseInt(b);
  // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

  /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
  document.getElementById("equals").innerHTML =
    "The major difference between using == and === is that == converts both values to the same value type before checking if they're the same, while === does not.";
  // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
  // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // In the logic paragraph describe the order of precedence for and / or operators
  document.getElementById("logic").innerHTML =
    "'And' (&&) takes precedence first, then 'or' (||) afterwards. The values between && would go first, then merge to become one true/false value. Then, that value is used with the other value in a || operation.";
  // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

  // Write code to demonstrate the use of the switch statement and display results to switch paragrah
  let c = "Red";
  let ans = "";

  switch (c) {
    case "Red":
      ans = "1";
      break;
    case "Blue":
      ans = "2";
      break;
    default:
      ans = "N/A";
      break;
  }

  document.getElementById("switch").innerHTML = ans;
  // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
  // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
  // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

  let d = "Purple";
  let ans2 = "";

  d === "Purple" ? (ans2 = "3") : (ans2 = "N/A");

  document.getElementById("ternary").innerHTML = ans2;
}
