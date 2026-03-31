let allShopItems = [];
//List of all items created by the user. The entire list is displayed in the shop.

document.getElementById("submit").addEventListener("click", function (event) {
  //Function for getting the values of the new item to be added, making them into an object, and adding it into allShopItems. Then, the list is displayed afterwards.
  event.preventDefault();
  let name = document.getElementById("name").value;
  let type = document.getElementById("itemType").value;
  let cost = document.getElementById("cost").value;
  let quanity = document.getElementById("quanity").value;
  let occasion = document.getElementById("occasion").value;
  //Get all values
  allShopItems.push(
    new Object({
      itemName: name,
      itemType: type,
      itemCost: cost,
      itemQuanity: quanity,
      itemOccasion: occasion,
    }),
  ); //Creates a new, nameless object with the above values and pushes it into allShopItems

  let shopMenu = "";
  //Variable for displaying shop items
  for (let x in allShopItems) {
    shopMenu +=
      allShopItems[x].itemName +
      ": " +
      allShopItems[x].itemType +
      " item | Cost: $" +
      allShopItems[x].itemCost +
      " | Quantity: " +
      allShopItems[x].itemQuanity +
      " left | Occasion: " +
      allShopItems[x].itemOccasion +
      "<br>";
  } //Displays the items in a specific order

  document.getElementById("shop").innerHTML = shopMenu;
});

document.getElementById("rename").addEventListener("click", function (event) {
  //Renames the shop to the user's requested name. The "Your Shop" text changes to whatever the user typed,  plus "!".
  event.preventDefault();
  document.getElementById("shopName").innerHTML =
    document.getElementById("shopNameVal").value + "!";
});

document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    //Gets the total value of one of each item in the shop, added together.
    event.preventDefault();

    let total = 0;

    for (let x in allShopItems) {
      total = total + parseInt(allShopItems[x].itemCost);
      //Gets the itemCost of each item, turns it into an Integer, then adds it.
    }

    document.getElementById("totalCost").innerHTML = "Your total is: $" + total;
  });
