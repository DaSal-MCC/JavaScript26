function calculateTotal() {
  let name = document.getElementById("name").value;
  let orderIntro = "Your order is: ";
  let order = "| ";

  let sand1 = parseFloat(document.getElementById("sand1").value * 3);
  let sand2 = parseFloat(document.getElementById("sand2").value * 4);
  let sand3 = parseFloat(document.getElementById("sand3").value * 6);
  let sand4 = parseFloat(document.getElementById("sand4").value * 5);
  let sand5 = parseFloat(document.getElementById("sand5").value * 5);

  if (sand1 != 0 && !isNaN(sand1)) {
    order = order + document.getElementById("sand1").value + " BLTs | ";
  }

  if (sand2 != 0 && !isNaN(sand2)) {
    order = order + document.getElementById("sand2").value + " Paninis | ";
  }

  if (sand3 != 0 && !isNaN(sand3)) {
    order = order + document.getElementById("sand3").value + " Hamburgers | ";
  }

  if (sand4 != 0 && !isNaN(sand4)) {
    order =
      order + document.getElementById("sand4").value + " Grilled Cheeses | ";
  }

  if (sand5 != 0 && !isNaN(sand5)) {
    order =
      order + document.getElementById("sand5").value + " Meatball Subs | ";
  }

  let sandCost = parseFloat(sand1 + sand2 + sand3 + sand4 + sand5);
  //alert(sandCost);

  let drink1 = parseFloat(document.getElementById("drink1").value * 2);
  let drink2 = parseFloat(document.getElementById("drink2").value * 4);
  let drink3 = parseFloat(document.getElementById("drink3").value * 3);
  let drink4 = parseFloat(document.getElementById("drink4").value * 3);
  let drink5 = parseFloat(document.getElementById("drink5").value * 4);

  if (drink1 != 0 && !isNaN(drink1)) {
    order = order + document.getElementById("drink1").value + " Waters | ";
  }

  if (drink2 != 0 && !isNaN(drink2)) {
    order = order + document.getElementById("drink2").value + " Colas | ";
  }

  if (drink3 != 0 && !isNaN(drink3)) {
    order = order + document.getElementById("drink3").value + " Milks | ";
  }

  if (drink4 != 0 && !isNaN(drink4)) {
    order =
      order + document.getElementById("drink4").value + " Apple Juices | ";
  }

  if (drink5 != 0 && !isNaN(drink5)) {
    order = order + document.getElementById("drink5").value + " Coffees | ";
  }

  let drinkCost = parseFloat(drink1 + drink2 + drink3 + drink4 + drink5);
  //alert(drinkCost);

  let dess1 = parseFloat(document.getElementById("dess1").value * 5);
  let dess2 = parseFloat(document.getElementById("dess2").value * 4);
  let dess3 = parseFloat(document.getElementById("dess3").value * 5);
  let dess4 = parseFloat(document.getElementById("dess4").value * 6);
  let dess5 = parseFloat(document.getElementById("dess5").value * 7);

  if (dess1 != 0 && !isNaN(dess1)) {
    order = order + document.getElementById("dess1").value + " Cakes | ";
  }

  if (dess2 != 0 && !isNaN(dess2)) {
    order = order + document.getElementById("dess2").value + " Brownies | ";
  }

  if (dess3 != 0 && !isNaN(dess3)) {
    order = order + document.getElementById("dess3").value + " Ice Creams | ";
  }

  if (dess4 != 0 && !isNaN(dess4)) {
    order = order + document.getElementById("dess4").value + " Apple Pies | ";
  }

  if (dess5 != 0 && !isNaN(dess5)) {
    order =
      order + document.getElementById("dess5").value + " Root Beer Floats | ";
  }

  let dessCost = parseFloat(dess1 + dess2 + dess3 + dess4 + dess5);
  //alert(dessCost);

  let totalCost = sandCost + drinkCost + dessCost;
  //alert(totalCost);

  if (!isNaN(totalCost)) {
    document.getElementById("ordIntro").innerHTML = orderIntro;
    document.getElementById("ord").innerHTML = order;
    document.getElementById("total").innerHTML =
      name + ", your total is: $" + totalCost + ". Thanks for shopping!";
  } else {
    document.getElementById("ordIntro").innerHTML = "";
    document.getElementById("ord").innerHTML = "";
    document.getElementById("total").innerHTML =
      name +
      ", your total could not be calculated because some values had invaild characters.";
  }
}
