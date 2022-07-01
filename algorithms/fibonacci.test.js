const assert = require('assert');
const Fibonacci = require('./fibonacci');

describe('Fibonacci', function () {
    describe('calculate()', function () {
        // Arrange
        const expectedSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55
            , 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
            , 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];

        expectedSequence.forEach((expected, index) => {
            const num = index + 1;

            // Act
            const actual = Fibonacci.calculate(num);

            // Assert
            it(`f(${num}) = ${expected}`, function () {
                assert.equal(actual, expected);
            });
        });
    });

    describe('getSequence()', function () {
        // Arrange
        const num = 12;
        const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

        // Act
        const actual = Fibonacci.getSequence(num);

        // Assert
        it(`the Fibonacci sequence should contain ${expected.length} numbers`, function () {
            assert.equal(actual.length, expected.length);
        });

        it(`the first ${num} Fibonacci numbers should be ${JSON.stringify(expected)}`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    });
});
