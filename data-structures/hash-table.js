/**
 * Hash Table Data Structure.
 */
class HashTable {
    constructor() {
        this.values = {};
    }

    /**
     * Return a value for the given key.
     * If the key is already present, the value will be replaced.
     * @param {*} key 
     */
    add(key, value) {
        this.values[key] = value;
    }

    /**
     * Remove the value for the given key.
     * @param {*} key 
     */
    remove(key) {
        delete this.values[key];
    }

    /**
     * Return the value for the given key.
     * @param {*} key 
     * @returns 
     */
    get(key) {
        return this.values[key];
    }

    /**
     * Return true if the hash table has a value for the given key.
     * @param {*} key 
     * @returns 
     */
    containsKey(key) {
        return this.values[key] !== undefined;
    }

    /**
     * Return true if the hash table is empty.
     * @returns 
     */
    isEmpty() {
        return this.count() == 0;
    }

    /**
     * Return the number of elements in the hash table.
     * @returns 
     */
    count() {
        return Object.keys(this.values).length;
    }
}

module.exports = HashTable;