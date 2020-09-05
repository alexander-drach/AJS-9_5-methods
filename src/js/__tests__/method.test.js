import Character from '../classes/character';
import Zombie from '../classes/zombie';

test('method test', () => {
  const c = new Character('Лучник', 'Bowerman');
  const z = new Zombie('Зомби', 'Zombie');

  c.levelUp();
  z.levelUp();
  z.damage(43);

  expect(c.level).toBe(2);
  expect(z.level).toBe(2);
  expect(z.attack).toBe(48);
  expect(z.health).toBe(62.16);
});