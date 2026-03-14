sayHi();

class PokemonCard {
  constructor(name, element, hp, stage) {
    this.name = name;
    this.element = element;
    this.hp = hp;
    this.stage = stage;
  }

  cardStats() {
    return `This Pokemon is ${this.name}. It's a ${this.element} Pokemon with ${this.hp} hp and is ${this.stage}.`;
  }

  static totalHP(card1, card2) {
    const hp1 = card1.hp;
    const hp2 = card2.hp;

    return hp1 + hp2;
  }
}

const pcard1 = new PokemonCard("Pikachu", "Electric", 80, "Basic");
const pcard2 = new PokemonCard("Charizard", "Fire", 200, "Stage 2");
const pcard3 = new PokemonCard("Lucario", "Fighting", 110, "Stage 2");
const pcard4 = new PokemonCard("Sharpedo", "Water", 150, "Stage 1");

console.log(pcard1);
console.log(pcard1.cardStats());
console.log(pcard2);
console.log(pcard2.cardStats());
console.log(PokemonCard.totalHP(pcard1, pcard2));

function sayHi() {
  return console.log(`Hello this function can be called anywhere!`);
}

document.getElementById("card1").innerHTML = pcard1.cardStats();
document.getElementById("card2").innerHTML = pcard2.cardStats();
document.getElementById("card3").innerHTML = pcard3.cardStats();
document.getElementById("card4").innerHTML = pcard4.cardStats();
