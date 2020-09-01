import Character from './character';

class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 25;
    this.defence = 25;
  }
}

export default Bowerman;
