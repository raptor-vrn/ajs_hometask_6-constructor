export default function Character(name, type) {
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const checkType = (element) => element === type;

  if ((name.length >= 2 || name.length <= 10) && types.find(checkType)) {
    this.name = name;
    this.type = type;
  } else {
    throw new Error('invalid value');
  }

  this.health = 100;
  this.level = 1;

  if (type === 'Bowman') {
    this.attack = 25;
    this.defence = 25;
  } else if (type === 'Swordsman') {
    this.attack = 40;
    this.defence = 10;
  } else if (type === 'Magician') {
    this.attack = 10;
    this.defence = 40;
  } else if (type === 'Daemon') {
    this.attack = 10;
    this.defence = 40;
  } else if (type === 'Undead') {
    this.attack = 25;
    this.defence = 25;
  } else {
    this.attack = 40;
    this.defence = 10;
  }
}

const Snow = new Character('snow', 'Zombie');
console.log(Snow);
