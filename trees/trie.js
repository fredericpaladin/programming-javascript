/**
 * Trie Data Structure.
 * This data structure is especially efficient for storing and seaeching strings and prefixes,
 * that's why they are also called prefix tree.
 */
class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    /**
     * Add a word to the tree.
     * @param {*} word 
     */
    insert(word) {

        let current = this.root;
        const chars = word.split('');
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (!current.contains(char))
                current.add(char);

            // Traverse the tree
            current = current.get(char);
        }

        // Flat the end of the word
        current.endOfWord = true;
    }

    /**
     * Remove a word from the tree.
     * @param {*} word 
     */
     delete(word) {
        
        // Store the nodes in an array, so that we can backtrack the branch
        // and delete the nodes (if they don't have any children)
        const breadcrumbs = [];

        let current = this.root;
        breadcrumbs.push(current);

        const chars = word.split('');
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (!current.contains(char))
                return; // The word does not exist

            // Traverse the tree
            current = current.get(char);
            breadcrumbs.push(current);
        }

        // Mark that the node is no longer the end of the word
        current.endOfWord = false;

        // Loop through the "breadcrumbs" array of nodes and check if they have any children
        for (let i = breadcrumbs.length - 1; i >= 0; i--) {
            const node = breadcrumbs[i];
            if (node.hasChildren()) {
                // Node as children: we cannot remove this branch, therefore exit the loop
                break;
            }

            // Current node does not have any more children.
            // Remove its value from the parent's children
            if (i > 0) {
                delete breadcrumbs[i - 1].children[node.value];
            }
        }
    }

    /**
     * Search a complete word and return true if it exists.
     * @param {*} word 
     */
    search(word) {

        let current = this.root;
        const chars = word.split('');
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (!current.contains(char))
                return false;

            // Traverse the tree
            current = current.get(char);
        }

        return current.endOfWord === true;
    }

    /**
     * Search a prefix of a word and return true if it exists.
     * @param {*} word 
     */
    startsWith(word) {

        let current = this.root;
        const chars = word.split('');
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (!current.contains(char))
                return false;

            // Traverse the tree
            current = current.get(char);
        }

        return true;
    }
}

class TrieNode {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    /**
     * Add a node (character) to the trie.
     * @param {*} char 
     */
    add(char) {
        this.children[char] = new TrieNode(char);
    }

    /**
     * Return true if the current node contains the character in its children.
     * @param {*} char 
     * @returns 
     */
    contains(char) {
        return this.children[char] !== undefined;
    }

    /**
     * Return the children node for the given character.
     * @param {*} char 
     * @returns 
     */
    get(char) {
        return this.children[char];
    }

    /**
     * Return true if the current node has one or more children.
     * @returns 
     */
    hasChildren() {
        return Object.keys(this.children).length > 0;
    }
}

module.exports = Trie;