class Property {
  constructor(propertyName, price, upgradeCost) {
    this.propertyName = propertyName;
    this.price = price;
    this.level = 0;
    this.upgradeCost = upgradeCost;
    this.owner = null;
    this.rent = rent;

    this.updateOwner = function (owner) {
      return (this.owner = owner);
    };

    this.upgrade = function () {
      if (this.level >= 5)
        return console.log("can't upgrade, property is at max level");
      this.level++;
      this.updatePrice();
    };

    this.downgrade = function () {
      if (this.level <= 1)
        return console.log("can't downgrade, property is at lowest level");
      this.level--;
      this.updatePrice();
    };

    this.updatePrice = function () {
      const percent = (this.level * 15) / 100;
      const newPrice = this.price * percent + this.price;
      this.price = newPrice;
    };
  }
}

const spots = [
  new Property("Ruins of New Madrid", 60, 50, 2),
  // "special",
  new Property("Balou Station Wreckage", 60, 50, 4),
  // "bad luck",
  // "stale prop", //Ion Fountain south
  new Property("Rift of Kothar", 100, 50, 6),
  // "special",
  new Property("Dronaium Mines", 100, 50, 6),
  new Property("Diani's Landing", 120, 50, 8),
  // "JAIL",

  new Property("City of Grini", 140, 100, 10),
  // "stale prop", //Veri
  new Property("Frozen Highlands ", 140, 100, 10),
  new Property("Aldan's Stand", 160, 100, 12),
  // "stale prop", //Ion Fountain west
  new Property("Hive of Fera", 180, 100, 14),
  // "special",
  new Property("New Titan", 180, 100, 14),
  new Property("Crystalline Sea", 200, 100, 16),
  // "FREE",

  new Property("Genri's Military Base", 220, 150, 18),
  // "special",
  new Property("City of Robots", 220, 150, 18),
  new Property("Mone Sleeper Ship", 240, 150, 20),
  // "stale prop", //Ion Fountain north
  new Property("Industrial Station", 260, 150, 22),
  new Property("Gibson'sRefinery", 260, 150, 22),
  // "stale prop", //Dena
  new Property("Crystal Mines", 280, 150, 24),
  // "GO TO JAIL",

  new Property("Boly Biomedical", 300, 200, 26),
  new Property("Luminous Citadel", 300, 200, 26),
  // "special",
  new Property("Lyncis Prime", 320, 200, 28),
  // "stale prop", //Ion Fountain east
  // "special",
  new Property("Ice Moon", 350, 200, 35),
  // "bad luck", //space pirates
  new Property("Dyson Sphere", 400, 200, 50),
  // "GO",
];
/*

*/
