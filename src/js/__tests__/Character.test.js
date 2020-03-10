import Character from '../Character.js'

describe('all heroes', () => {
    test('doing Zombie', () => {
        const Snow = new Character('snow', 'Zombie');
        expect(new Character('snow', 'Zombie')).toEqual(Snow);
    });

    test('doing Bowman', () => {
        const Bowman = new Character('snow', 'Bowman');
        expect(new Character('snow', 'Bowman')).toEqual(Bowman);
    });

    test('doing Magician', () => {
        const Magician = new Character('snow', 'Magician');
        expect(new Character('snow', 'Magician')).toEqual(Magician);
    });

    test('doing Swordsman', () => {
        const Swordsman = new Character('snow', 'Swordsman');
        expect(new Character('snow', 'Swordsman')).toEqual(Swordsman);
    });

    test('doing Daemon', () => {
        const Daemon = new Character('snow', 'Daemon');
        expect(new Character('snow', 'Daemon')).toEqual(Daemon);
    });

    test('doing Undead', () => {
        const Undead = new Character('snow', 'Undead');
        expect(new Character('snow', 'Undead')).toEqual(Undead);
    });
});


