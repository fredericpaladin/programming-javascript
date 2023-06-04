const assert = require('assert');
const { devNull } = require('os');
const Prison = require('./one-hundred-prisoners-riddle');

describe('Prison', function () {

    describe('print()', function () {
        // Arrange
        const length = 100;
        const prison = new Prison(length);

        // Act
        prison.showBoxes();

        // Assert
        it(`Prison has ${length} boxes`, function () {
            assert.equal(length, prison.boxes.length);
        });
    });
});
