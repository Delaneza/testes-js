const sub = require('./sub')

test('subtract 5 - 3 to equal 2', () => {
    expect(sub(5, 3)).toBe(2)
})