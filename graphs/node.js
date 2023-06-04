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

module.exports = Node;