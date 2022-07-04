const assert = require('assert');
const DepthFirstSearch = require('./depth-first-search');

describe('DepthFirstSearch', function () {
    describe('findPath()', function () {
        describe('open graph', function () {
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
            const actual = dfs.findPath(startingNode);

            // Assert
            const expected = 'acebdf';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('closed loop graph', function () {
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
            const actual = dfs.findPath(startingNode);

            // Assert
            const expected = 'acebdf';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('last node', function () {
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
            const actual = dfs.findPath(startingNode);

            // Assert
            const expected = 'f';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('non-existing node', function () {
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
            const startingNode = 'x';
            const actual = dfs.findPath(startingNode);

            // Assert
            const expected = '';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });
    });

    describe('findPathRecursevely()', function () {
        describe('open graph', function () {
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
            const actual = dfs.findPathRecursevely(startingNode);

            // Assert
            const expected = 'abdfce';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('closed loop graph', function () {
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

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('last node', function () {
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

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });

        describe('non-existing node', function () {
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
            const startingNode = 'x';
            const actual = dfs.findPathRecursevely(startingNode);

            // Assert
            const expected = '';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });
    });
});
