export class Player {
  constructor(name, start) {
    this.name = name;

    this.totalShield = 10;
    this.shield = 10;

    this.totalHull = 10;
    this.hull = 10;

    this.cannon = 2;
    this.credits = 1500;

    this.position = start;
    this.blackmailChit = 0;

    this.getBlackmailChit = function () {
      console.log("You've acquired some blackmail. might be useful later...");
      this.blackmailChit += 1;
    };

    this.changePosition = function (place) {
      console.log(`position changed ${place}`);
      this.position = place;
    };

    this.upgrade = function (component, amount) {
      switch (component) {
        case "shield":
          console.log(`shield total has been upgraded by ${amount}`);
          this.totalShield += amount;

          break;
        case "hull":
          console.log(`hull total has been upgraded by ${amount}`);
          this.totalHull += amount;

          break;
        case "cannon":
          console.log(`cannon total has been upgraded by ${amount}`);
          this.cannon += amount;

          break;

        default:
          break;
      }
    };
    this.rechargeShields = function (amount) {
      if (this.shield === this.totalShield) return 
      
    }

    this.downgrade = function (component, amount) {
      switch (component) {
        case "shield":
          console.log(`shield total has been downgraded by ${amount}`);
          this.shield -= amount;

          break;
        case "hull":
          console.log(`hull total has been downgraded by ${amount}`);
          this.hull -= amount;

          break;
        case "cannon":
          console.log(`cannon total has been downgraded by ${amount}`);
          this.cannon -= amount;

          break;

        default:
          break;
      }
    };

    this.pay = function (amount, who = false) {
      console.log(`You lost ${amount}`);
      this.credits -= amount;
      if (who) {
        who.earn(amount);
      }
    };

    this.earn = function (amount) {
      console.log(`You earned ${amount}`);
      this.credits += amount;
    };
  }
}
