var Trie = function () {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

    let current = this.root;
    const chars = word.split(''); // TODO
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (current[char] !== undefined) {
            current[char] = {
                
            }
            current.add(char);
        }

        // Traverse the tree
        current = current.get(char);
    }

    // Flat the end of the word
    current.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */