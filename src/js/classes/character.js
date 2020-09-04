class Character {
  constructor(name, type) {
    if ((typeof name) === 'string') {
      this.name = name;
    } else {
      throw new Error('Имя персонажа должно быть строкой');
    }

    if (name.length >= 2 || name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }

    switch (type) {
      case 'Bowerman':
        this.type = type;
        break;
      case 'Swordsman':
        this.type = type;
        break;
      case 'Magician':
        this.type = type;
        break;
      case 'Daemon':
        this.type = type;
        break;
      case 'Undead':
        this.type = type;
        break;
      case 'Zombie':
        this.type = type;
        break;
      default:
        throw new Error('Типом персонажа может быть одно из следующих значений: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
