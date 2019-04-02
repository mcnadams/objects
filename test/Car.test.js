const Car = require('../lib/Car');

describe('Car class', () => {
    const myCar = new Car('Subaru', 'Forester', 2010, 'black');
    it('has the expected make', () => {
        expect(myCar.make).toBe('Subaru');
    });
    it('has the expected model', () => {
        expect(myCar.model).toBe('Forester');
    });
    it('has the expected year', () => {
        expect(myCar.year).toBe(2010);
    });
    it('has the expected color', () => {
        expect(myCar.color).toBe('black');
    });
    it('has the expected miles', () => {
        expect(myCar.miles).toBe(0);
    });
});