
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
    constructor(adjacencyList) {

        // 2 ways of representing a graph: adjacency list or actual objects
        this.adjacencyList = adjacencyList;
        this.graph = new Graph(adjacencyList);
    }

    /**
     * Returns the nodes using DFS (iteratively) with a stack.
     * Note: due to the nature of this algorithm, whih uses a stack,
     * it is possible to implement it recursevely (see below).
     * @param {*} node 
     * @returns 
     */
    getNodes(node) {

        let path = "";
        const stack = [node];
        const visitedNodes = {}
        while (stack.length > 0) {
            const current = stack.pop();
            if (visitedNodes[current] || !this.adjacencyList[current])
                continue;

            visitedNodes[current] = true;
            path += current;

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
     * @returns 
     */
    getNodesRecursevely(node, visitedNodes = {}) {
        if (visitedNodes[node] || !this.adjacencyList[node])
            return '';

        visitedNodes[node] = true;
        let path = node;
        for (let neighbor of this.adjacencyList[node]) {
            path += this.getNodesRecursevely(neighbor, visitedNodes);
        }

        return path;
    }
}

/**
 * Represent a graph
 */
class Graph {
    constructor(adjacencyList) {

        /**
         * Nodes are vertices that correspond to objects.
         */
        this.nodes = [];

        for (const [value, edges] of Object.entries(adjacencyList))
            this.nodes.push(new Node(value, edges));
    }
}

/**
 * Represent a node.
 */
class Node {
    constructor(value, edges) {

        /**
         * The value of the node.
         */
        this.value = value;

        /**
         * Edges are the connections between objects.
         */
        this.edges = edges;
    }
}

module.exports = DepthFirstSearch;