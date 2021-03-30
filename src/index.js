export default class Magican {
  constructor(attack) {
    this.attack = attack;
    this.stoned = false;
  }

  get getAttack() {
    return this.attack;
  }

  set setAttack(value) {
    if (value === 1) {
      if (this.stoned === true) {
        this.attack -= (Math.log2(value) * 5);
      }
    }    
    if (value === 2) {
      if (this.stoned === true) {
        this.attack = Math.round((this.attack - (this.attack * 0.1)) - (Math.log2(value) * 5));
      } else {
        this.attack -= (this.attack * 0.1);
      }
    }

    if (value === 3) {
      if (this.stoned === true) {
        this.attack = Math.round((this.attack - (this.attack * 0.2)) - (Math.log2(value) * 5));
      } else {
        this.attack -= (this.attack * 0.2);
      }
    }
    if (value === 4) {
      if (this.stoned === true) {
        this.attack = Math.round((this.attack - (this.attack * 0.3)) - (Math.log2(value) * 5));
      } else {
        this.attack -= (this.attack * 0.3);
      }
    }
    if (value === 5) {
      if (this.stoned === true) {
        this.attack = Math.round((this.attack - (this.attack * 0.4)) - (Math.log2(value) * 5));
      } else {
        this.attack -= (this.attack * 0.4);
      }
    }
    if (value > 5) { this.attack = 0; }
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
