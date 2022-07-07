const assert = require('assert');
const IntegerToRoman = require('./integer-to-roman');

describe('IntegerToRoman', function () {

    const inputs = [
        3999,
        1994,
        1000,
        500,
        101,
        100,
        99,
        58,
        50,
        20,
        19,
        18,
        17,
        16,
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ];
    const outputs = [
        'MMMCMXCIX',
        'MCMXCIV',
        'M',
        'D',
        'CI',
        'C',
        'XCIX',
        'LVIII',
        'L',
        'XX',
        'XIX',
        'XVIII',
        'XVII',
        'XVI',
        'XV',
        'XIV',
        'XIII',
        'XII',
        'XI',
        'X',
        'IX',
        'VIII',
        'VII',
        'VI',
        'V',
        'IV',
        'III',
        'II',
        'I'
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const expected = outputs[i];

        // Act
        const actual = IntegerToRoman.intToRoman(input);

        // Assert
        it(`Test ${i}: intToRoman('${input}') should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
