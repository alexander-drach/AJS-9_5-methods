// TODO: write your code here
import sum from './basic';
import Character from './classes/Character';
import Bowerman from './classes/Bowerman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Daemon from './classes/Daemon';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';

console.log('worked');

console.log(sum([1, 2]));

const c = new Character('pers', 'Bowerman');
const b = new Bowerman('pers', 'Bowerman');
console.log(c);
console.log(b);
