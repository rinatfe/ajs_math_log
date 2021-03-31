export default class Magican {
  constructor(attack) {
    this.attack = attack;
    this.stoned = false;
    this.distance;
  }

  get getAttack() {
    if(!this.distance) return this.attack;
    if(this.distance > 11) return 0;
    let item = Number((this.distance - 1) + "0");
    let precent = item/100;
    if (this.stoned === true) {
      return Math.round((this.attack - (this.attack * precent)) - (Math.log2(this.distance) * 5));
    } else {
      return this.attack - (this.attack * precent);
    }

  }

  set setAttack(value) {
    this.distance = value;
  }

  get getStoned() {
    return this.stoned;
  }

  set setStoned(value) {
    if (typeof (value) === 'boolean') { this.stoned = value; }
  }
}

export class Daemon extends Magican {

}
