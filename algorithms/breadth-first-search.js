
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
    constructor(adjacencyList) {

        // 2 ways of representing a graph: adjacency list or actual objects
        this.adjacencyList = adjacencyList;
        this.graph = new Graph(adjacencyList);
    }

    
    /**
     * Returns the nodes using BFS with a queue.
     * @param {*} node 
     * @returns 
     */
     getNodes(node) {

        let path = "";
        const queue = [node];
        const visitedNodes = {}
        while (queue.length > 0) {
            const current = queue.shift(); // Remove the first element
            if (visitedNodes[current] || !this.adjacencyList[current])
                continue;

            visitedNodes[current] = true;
            path += current;

            for (let neighbor of this.adjacencyList[current]) {
                queue.push(neighbor);
            }
        }

        return path;
    }
}

/**
 * Represent a graph.
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

module.exports = BreadthFirstSearch;