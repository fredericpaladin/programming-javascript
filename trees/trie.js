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
        this.value = value; // This is not really needed
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