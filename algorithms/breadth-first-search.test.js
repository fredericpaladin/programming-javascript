const assert = require('assert');
const BreadthFirstSearch = require('./breadth-first-search');

describe('BreadthFirstSearch', function () {
    describe('getNodes()', function () {
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

            const bfs = new BreadthFirstSearch(adjacencyList);

            // Act
            const startingNode = 'a';
            const actual = bfs.getNodes(startingNode);

            // Assert
            const expected = 'abcdef';

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

            const bfs = new BreadthFirstSearch(adjacencyList);

            // Act
            const startingNode = 'a';
            const actual = bfs.getNodes(startingNode);

            // Assert
            const expected = 'abcdef';

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

            const bfs = new BreadthFirstSearch(adjacencyList);

            // Act
            const startingNode = 'f';
            const actual = bfs.getNodes(startingNode);

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

            const bfs = new BreadthFirstSearch(adjacencyList);

            // Act
            const startingNode = 'x';
            const actual = bfs.getNodes(startingNode);

            // Assert
            const expected = '';

            it(`The path starting at node '${startingNode}' should be '${expected}'`, function () {
                assert.equal(actual, expected);
            });
        });
    });
});
