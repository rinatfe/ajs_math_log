/* eslint-disable */
import Magican, {Daemon} from "./index";

test('test', () => {
    expect(new Magican(100)).toEqual({attack:100, stoned:false});
  });

  test('test', () => {
    expect(new Daemon(100)).toEqual({attack:100, stoned:false});
  });

  test('test', () => {
    const magic = new Magican(100);
    expect(magic.attack).toBe(100);
  });

  test('test', () => {
    const magic = new Magican(100);
    expect(magic.getAttack).toBe(100);
  });

  test('test', () => {
    const magic = new Magican(100);
    expect(magic.getStoned).toEqual(false);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 1;
    expect(magic.getAttack).toBe(100);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 2;
    expect(magic.getAttack).toBe(90);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 3;
    expect(magic.getAttack).toBe(80);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 4;
    expect(magic.getAttack).toBe(70);
  });
  
  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 5;
    expect(magic.getAttack).toBe(60);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 6;
    expect(magic.getAttack).toBe(50);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 11;
    expect(magic.getAttack).toBe(0);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setAttack = 12;
    expect(magic.getAttack).toBe(0);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    expect(magic.getStoned).toEqual(true);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    magic.setAttack = 1;
    expect(magic.getAttack).toBe(100);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    magic.setAttack = 2;
    expect(magic.getAttack).toBe(85);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    magic.setAttack = 3;
    expect(magic.getAttack).toBe(72);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    magic.setAttack = 4;
    expect(magic.getAttack).toBe(60);
  });

  test('test', () => {
    const magic = new Magican(100);
    magic.setStoned = true;
    magic.setAttack = 5;
    expect(magic.getAttack).toBe(48);
  });

