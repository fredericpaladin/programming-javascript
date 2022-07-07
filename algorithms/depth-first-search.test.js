const assert = require('assert');
const DepthFirstSearch = require('./depth-first-search');

describe('DepthFirstSearch', function () {
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

            const dfs = new DepthFirstSearch(adjacencyList);

            // Act
            const startingNode = 'a';
            const actual = dfs.getNodes(startingNode);

            // Assert
            const expected = ['a', 'c', 'e', 'b', 'd', 'f'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodes(startingNode);

            // Assert
            const expected = ['a', 'c', 'e', 'b', 'd', 'f'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodes(startingNode);

            // Assert
            const expected = ['f'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodes(startingNode);

            // Assert
            const expected = [];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
            });
        });
    });

    describe('getNodesRecursevely()', function () {
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
            const actual = dfs.getNodesRecursevely(startingNode);

            // Assert
            const expected = ['a', 'b', 'd', 'f', 'c', 'e'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodesRecursevely(startingNode);

            // Assert
            const expected = ['a', 'b', 'd', 'f', 'c', 'e'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodesRecursevely(startingNode);

            // Assert
            const expected = ['f'];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
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
            const actual = dfs.getNodesRecursevely(startingNode);

            // Assert
            const expected = [];

            it(`The node list starting from '${startingNode}' should be '${expected}'`, function () {
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
            });
        });
    });
});
