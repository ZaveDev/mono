import {spots} from './BoardSpot';

class Board {
  constructor(spotList){
    this.spotList = spotList
    this.moveRoll = function () {
      const roll1 = Math.floor((Math.random()*6)+1)
      const roll2  = Math.floor((Math.random()*6)+1)
      return roll1 + roll2
    }
  }
}

export const TheBoard = new Board(spots)