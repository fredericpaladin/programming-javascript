
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
 * Depth First Search.
 * Find the path between 2 nodes by exploring the branches first.
 * 
 * Stack
 */
class DepthFirstSearch {

    /**
     * Constructor.
     * @param {*} adjacencyList 
     */
    constructor(adjacencyList) {
        this.adjacencyList = adjacencyList;
    }

    /**
     * Returns the nodes using DFS (iteratively) with a stack.
     * Note: due to the nature of this algorithm, whih uses a stack,
     * it is possible to implement it recursevely (see below).
     * @param {*} node 
     * @returns {Array}
     */
    getNodes(node) {

        const path = [];
        const stack = [node];
        const visitedNodes = {}
        while (stack.length > 0) {
            const current = stack.pop();
            if (visitedNodes[current] || !this.adjacencyList[current]) {
                continue;
            }

            visitedNodes[current] = true;
            path.push(current);

            for (let neighbor of this.adjacencyList[current]) {
                stack.push(neighbor);
            }
        }

        return path;
    }

    /**
     * Returns the nodes using DFS (recursively) with a stack.
     * @param {*} node 
     * @param {*} visitedNodes 
     * @returns {Array}
     */
    getNodesRecursevely(node, visitedNodes = {}) {
        if (visitedNodes[node] || !this.adjacencyList[node]) {
            return [];
        }

        visitedNodes[node] = true;
        let nodes = [node];
        for (let neighbor of this.adjacencyList[node]) {
            nodes = nodes.concat(this.getNodesRecursevely(neighbor, visitedNodes));
        }

        return nodes;
    }
}

module.exports = DepthFirstSearch;