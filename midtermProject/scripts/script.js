let allShopItems = [];

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let type = document.getElementById("type").value;
  let cost = document.getElementById("cost").value;
  let quanity = document.getElementById("quanity").value;
  let occasion = document.getElementById("occasion").value;

  allShopItems.push(
    new Object({
      itemName: name,
      itemType: type,
      itemCost: cost,
      itemQuanity: quanity,
      itemOccasion: occasion,
    }),
  );

  let shopMenu = "";

  for (let x in allShopItems) {
    shopMenu +=
      allShopItems[x].itemName +
      ": " +
      allShopItems[x].itemType +
      " item. Cost: $" +
      allShopItems[x].itemCost +
      " with " +
      allShopItems[x].itemQuanity +
      " left. Occasion: " +
      allShopItems[x].itemOccasion +
      "<br>";
  }

  document.getElementById("shop").innerHTML = shopMenu;
});
