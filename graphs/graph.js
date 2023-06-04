/**
 * Represent a graph.
 */
 class Graph {
    constructor(adjacencyList) {

        /**
         * Nodes are vertices that correspond to objects.
         */
        this.nodes = [];

        for (const [value, edges] of Object.entries(adjacencyList)) {
            this.nodes.push(new Node(value, edges));
        }
    }
}

module.exports = Graph;