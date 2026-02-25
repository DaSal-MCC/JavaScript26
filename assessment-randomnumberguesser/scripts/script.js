let answer = Math.floor(Math.random() * 1000) + 1;
//alert(answer); --Debug
function guessResponse() {
  userGuess = document.getElementById("guess").value;

  if (userGuess == answer) {
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML =
      "Correct! You win! (" + answer + ")";
  } else if (userGuess <= answer + 10 && userGuess >= answer - 10) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Warmest...";
  } else if (userGuess <= answer + 50 && userGuess >= answer - 50) {
    document.getElementById("result").style.color = "crimson";
    document.getElementById("result").innerHTML = "Warmer...";
  } else if (userGuess <= answer + 150 && userGuess >= answer - 150) {
    document.getElementById("result").style.color = "maroon";
    document.getElementById("result").innerHTML = "Warm...";
  } else if (userGuess <= answer + 250 && userGuess >= answer - 250) {
    document.getElementById("result").style.color = "navy";
    document.getElementById("result").innerHTML = "Cold...";
  } else if (userGuess <= answer + 400 && userGuess >= answer - 400) {
    document.getElementById("result").style.color = "darkblue";
    document.getElementById("result").innerHTML = "Colder...";
  } else {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML = "Coldest...";
  }
}
