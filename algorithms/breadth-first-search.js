
/**
 * Adjacency list: used to represent a graph with edges/nodes
 * 
 * adjacencyList = {
 *  a: [c, b],
 *  b: [d],
 *  c: [e],
 *  d: [],
 *  e: [b],
 *  f: [d]
 * }
 */

/**
 * Breadth First Search.
 * Find the path between 2 nodes by exploring the neighbors first.
 * 
 * Queue
 */
class BreadthFirstSearch {

    /**
     * Constructor.
     * @param {*} adjacencyList 
     */
    constructor(adjacencyList) {
        this.adjacencyList = adjacencyList;
    }

    /**
     * Returns the nodes using BFS with a queue.
     * @param {*} node 
     * @returns {Array}
     */
    getNodes(node) {

        const nodes = [];
        const queue = [node];
        const visitedNodes = {}
        while (queue.length > 0) {
            const current = queue.shift(); // Remove the first element
            if (visitedNodes[current] || !this.adjacencyList[current]) {
                continue;
            }

            visitedNodes[current] = true;
            nodes.push(current);

            for (let neighbor of this.adjacencyList[current]) {
                queue.push(neighbor);
            }
        }

        return nodes;
    }
}

module.exports = BreadthFirstSearch;