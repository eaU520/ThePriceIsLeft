const { default: Price } = require("../components/Price");
const price1 = require("./Price");

describe('Check price and name', () => {
    it('multiply 4 * 3 to equal 12', () => {
        expect(Price(4, 3)).toBe(12);//TODO: functional components and tests
    });
    
    it('multiply 4 * -3 to equal -12', () => {
        expect(multiply(4, -3)).toBe(-12);
    });
})