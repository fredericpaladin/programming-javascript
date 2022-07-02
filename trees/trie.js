/**
 * Trie Data Structure.
 * This data structure is especially efficient for storing and seaeching strings and prefixes,
 * that's why they are also called prefix tree.
 */
class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

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
        current.isLeaf = true;
    }

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

        return current.isLeaf === true;
    }

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
        this.isLeaf = false;
    }

    add(char) {
        this.children[char] = new TrieNode(char);
    }

    contains(char) {
        return this.children[char] !== undefined;
    }

    get(char) {
        return this.children[char];
    }

    hasChildren() {

    }
}

module.exports = Trie;