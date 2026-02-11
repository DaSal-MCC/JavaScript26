const card1 = {
  cardImg: "images/EnergyCard.jpg",
  cardName: "Basic Energy",
  cardExample: "Ex: Fire Energy",
  cardDescription:
    "Energy cards are used to power up Pokemon attacks. You can only attach one per turn. They can never be discarded unless you make your Pokemon retreat or through some other event.",
  cardFunFact:
    "You can bring as many basic energy cards as you want, except for special energy cards.",
};

const card2 = {
  cardImg: "images/Pokemon.jpg",
  cardName: "Pokemon",
  cardExample: "Ex: Oricorio",
  cardDescription:
    "Regular Pokemon are frequently used in card battles. They consist of Basic, Stage 1, and Stage 2 Pokemon. Most regular cards have abilities that can be combined with others as apart of various strategies.",
  cardFunFact:
    "You can't play a battle without a basic Pokemon card to start with.",
};

const card3 = {
  cardImg: "images/PokemonEx.jpg",
  cardName: "Pokemon ex",
  cardExample: "Ex: Arven's Mabosstiff ex",
  cardDescription:
    "Pokemon ex cards are powerful cards. They are used more frequently than regular Pokemon due to their massive hp and attack damage. However, they may rely on the abilities of regular Pokemon to help fuel their attacks.",
  cardFunFact:
    "Some ex cards are considered basic Pokemon, and can be played right away.",
};

const card4 = {
  cardImg: "images/PokemonMegaEx.jpg",
  cardName: "Pokemon Mega ex",
  cardExample: "Ex: Mega Latias ex",
  cardDescription:
    "Mega ex Pokemon are more powerful than even ex Pokemon. They have even more HP and attacks that deal even more damage. However, if they are knocked out, your opponent gets three prize cards, which is half of the required prize cards to win (six).",
  cardFunFact:
    "The Pokemon on these cards have regular forms, but they aren't featured in this series.",
};

const card5 = {
  cardImg: "images/TrainerCard.jpg",
  cardName: "Trainer Card",
  cardExample: "Ex: Pokemon Item: Blowtorch",
  cardDescription:
    "Trainer cards are support cards that grant extra effects and abilities that can help you and your Pokemon. They consist of Item, Supporter, Stadium, and Tools. Some cards may require you to discard a card from your hand to use it's ability.",
  cardFunFact:
    "Supporter cards can only be played once per turn, and you can attach as many Tool cards as you want, but you can only attach one card to one Pokemon at a time.",
};

function showCards() {
  let display1 =
    `<h2>${card1.cardName}</h2>` +
    `<img src=${card1.cardImg}></img>` +
    `<h3>${card1.cardExample}</h3>` +
    `<p>${card1.cardDescription}</p>` +
    `<h3>Fun Fact:</h3>` +
    `<p>${card1.cardFunFact}</p>`;

  document.getElementById("card1").innerHTML = display1;

  let display2 =
    `<h2>${card2.cardName}</h2>` +
    `<img src=${card2.cardImg}></img>` +
    `<h3>${card2.cardExample}</h3>` +
    `<p>${card2.cardDescription}</p>` +
    `<h3>Fun Fact:</h3>` +
    `<p>${card2.cardFunFact}</p>`;

  document.getElementById("card2").innerHTML = display2;

  let display3 =
    `<h2>${card3.cardName}</h2>` +
    `<img src=${card3.cardImg}></img>` +
    `<h3>${card3.cardExample}</h3>` +
    `<p>${card3.cardDescription}</p>` +
    `<h3>Fun Fact:</h3>` +
    `<p>${card3.cardFunFact}</p>`;

  document.getElementById("card3").innerHTML = display3;

  let display4 =
    `<h2>${card4.cardName}</h2>` +
    `<img src=${card4.cardImg}></img>` +
    `<h3>${card4.cardExample}</h3>` +
    `<p>${card4.cardDescription}</p>` +
    `<h3>Fun Fact:</h3>` +
    `<p>${card4.cardFunFact}</p>`;

  document.getElementById("card4").innerHTML = display4;

  let display5 =
    `<h2>${card5.cardName}</h2>` +
    `<img src=${card5.cardImg}></img>` +
    `<h3>${card5.cardExample}</h3>` +
    `<p>${card5.cardDescription}</p>` +
    `<h3>Fun Fact:</h3>` +
    `<p>${card5.cardFunFact}</p>`;

  document.getElementById("card5").innerHTML = display5;
}
