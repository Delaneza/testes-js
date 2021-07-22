const mult = require('./mult')

test('multiplies 2 * 5 to equal 10', () => {
    expect(mult(2, 5)).toBe(10)
})