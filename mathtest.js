const sum = require('./math');

test('soma de dois números positivos', () => {
    expect(sum(1, 2)).toBe(3);
});

test('soma de números negativos', () => {
    expect(sum(-1, -2)).toBe(-3);
});

test('soma de um número positivo com zero', () => {
    expect(sum(5, 0)).toBe(5);
});
