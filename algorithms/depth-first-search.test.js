const assert = require('assert');
const DepthFirstSearch = require('./depth-first-search');

describe('DepthFirstSearch', function () {

    describe('findPathIteratively() open', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': [],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'a';
        const actual = dfs.findPathIteratively(startingNode);

        // Assert
        const expected = 'acebdf';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('findPathIteratively() closed loop', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': ['b'],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'a';
        const actual = dfs.findPathIteratively(startingNode);

        // Assert
        const expected = 'acebdf';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('findPathIteratively() end node', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': ['b'],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'f';
        const actual = dfs.findPathIteratively(startingNode);

        // Assert
        const expected = 'f';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('findPathRecursevely() open', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': [],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'd';
        const actual = dfs.findPathRecursevely(startingNode);

        // Assert
        const expected = 'abdfce';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('findPathRecursevely() closed loop', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': ['b'],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'a';
        const actual = dfs.findPathRecursevely(startingNode);

        // Assert
        const expected = 'abdfce';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('findPathRecursevely() end the path', function () {
        // Arrange
        const adjacencyList = {
            'a': ['b', 'c'],
            'b': ['d'],
            'c': ['e'],
            'd': ['f'],
            'e': ['b'],
            'f': []
        };

        const dfs = new DepthFirstSearch(adjacencyList);

        // Act
        const startingNode = 'f';
        const actual = dfs.findPathRecursevely(startingNode);

        // Assert
        const expected = 'f';

        it(`The path using starting at '${startingNode}' should be '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    });
});
