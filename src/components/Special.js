const upgrade1 = (player) => player.upgrade("shield", 1);
const upgrade2 = (player) => player.upgrade("shield", 2);
const upgrade3 = (player) => player.upgrade("shield", 3);
const upgrade4 = (player) => player.upgrade("cannon", 1);
const upgrade5 = (player) => player.upgrade("cannon", 2);
const upgrade6 = (player) => player.upgrade("cannon", 3);
const upgrade7 = (player) => player.upgrade("hull", 1);
const upgrade8 = (player) => player.upgrade("hull", 2);
const upgrade9 = (player) => player.upgrade("hull", 3);

const downgrade1 = (player) => player.downgrade("shield", 1);
const downgrade2 = (player) => player.downgrade("shield", 2);
const downgrade3 = (player) => player.downgrade("shield", 3);
const downgrade4 = (player) => player.downgrade("cannon", 1);
const downgrade5 = (player) => player.downgrade("cannon", 2);
const downgrade6 = (player) => player.downgrade("cannon", 3);
const downgrade7 = (player) => player.downgrade("hull", 1);
const downgrade8 = (player) => player.downgrade("hull", 2);
const downgrade9 = (player) => player.downgrade("hull", 3);

const earn1 = (player) => player.earn(2);
const earn2 = (player) => player.earn(2);
const earn3 = (player) => player.earn(2);
const earn4 = (player) => player.earn(5);
const earn5 = (player) => player.earn(5);
const earn6 = (player) => player.earn(10);
const earn7 = (player) => player.earn(10);
const earn8 = (player) => player.earn(15);
const earn9 = (player) => player.earn(20);
const earn10 = (player) => player.earn(20);
const earn11 = (player) => player.earn(25);
const earn12 = (player) => player.earn(50);
const earn13 = (player) => player.earn(50);
const earn14 = (player) => player.earn(75);
const earn15 = (player) => player.earn(75);
const earn16 = (player) => player.earn(100);
const earn17 = (player) => player.earn(100);
const earn18 = (player) => player.earn(150);
const earn19 = (player) => player.earn(200);

const pay1 = (player) => player.pay(2);
const pay2 = (player) => player.pay(5);
const pay3 = (player) => player.pay(10);
const pay4 = (player) => player.pay(15);
const pay5 = (player) => player.pay(20);
const pay6 = (player) => player.pay(25);
const pay7 = (player) => player.pay(50);
const pay8 = (player) => player.pay(75);
const pay9 = (player) => player.pay(100);
const pay10 = (player) => player.pay(150);

const teleport1 = (player) => {
  const random = Math.floor(Math.random() * 40);
  player.changePosition(random);
};
const teleport2 = (player) => {
  const random = Math.floor(Math.random() * 40);
  player.changePosition(random);
};
const teleport3 = (player) => {
  const random = Math.floor(Math.random() * 40);
  player.changePosition(random);
};
const teleport4 = (player) => {
  const random = Math.floor(Math.random() * 40);
  player.changePosition(random);
};
const teleport5 = (player) => {
  const random = Math.floor(Math.random() * 40);
  player.changePosition(random);
};

const jail1 = (player) => player.changePosition("jail");
const jail2 = (player) => player.changePosition("jail");

const blackmail1 = (player) => player.getBlackmailChit();
const blackmail2 = (player) => player.getBlackmailChit();

const start1 = (player) => player.changePosition("start");
const start2 = (player) => player.changePosition("start");

// loop earn to "player" (25)
// loop earn to "player" (50)
// loop pay to "players" 25
// loop pay to "players" 50
const theDeck = [
  upgrade1,
  upgrade2,
  upgrade3,
  upgrade4,
  upgrade5,
  upgrade6,
  upgrade7,
  upgrade8,
  upgrade9,
  downgrade1,
  downgrade2,
  downgrade3,
  downgrade4,
  downgrade5,
  downgrade6,
  downgrade7,
  downgrade8,
  downgrade9,
  earn1,
  earn2,
  earn3,
  earn4,
  earn5,
  earn6,
  earn7,
  earn8,
  earn9,
  earn10,
  earn11,
  earn12,
  earn13,
  earn14,
  earn15,
  earn16,
  earn17,
  earn18,
  earn19,
  pay1,
  pay2,
  pay3,
  pay4,
  pay5,
  pay6,
  pay7,
  pay8,
  pay9,
  pay10,
  teleport1,
  teleport2,
  teleport3,
  teleport4,
  teleport5,
  jail1,
  jail2,
  blackmail1,
  blackmail2,
  start1,
  start2,
];

class Deck {
  constructor(theDeck) {
    this.OGDeck = theDeck;
    this.theDeck = theDeck;

    this.shuffle = function () {
      this.theDeck = [...this.OGDeck];
      this.theDeck.sort(() => Math.random() - 0.5);
      this.theDeck.sort(() => Math.random() - 0.5);
      this.theDeck.sort(() => Math.random() - 0.5);
    };

    this.draw = function (player) {
      if (this.theDeck.length === 0) this.shuffle();
      const card = this.theDeck.shift();
      card(player);
    };
  }
}

export const MonoDeck = new Deck(theDeck);
