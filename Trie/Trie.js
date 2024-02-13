class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return true;
  }

  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(currentNode, word, index) {
    if (index === word.length) {
      if (!currentNode.isEndOfWord) {
        return false;
      }
      currentNode.isEndOfWord = false;
      return Object.keys(currentNode.children).length === 0;
    }

    const char = word[index];
    if (!currentNode.children[char]) {
      return false;
    }

    const shouldDeleteCurrentNode =
      this.deleteRecursive(currentNode.children[char], word, index + 1);

    if (shouldDeleteCurrentNode) {
      delete currentNode.children[char];
      return Object.keys(currentNode.children).length === 0;
    }

    return false;
  }

  isEmpty() {
    return Object.keys(this.root.children).length === 0;
  }

  getAllWords() {
    const words = [];
    this.getAllWordsRecursive(this.root, '', words);
    return words;
  }

  getAllWordsRecursive(currentNode, prefix, words) {
    if (currentNode.isEndOfWord) {
      words.push(prefix);
    }

    for (const char in currentNode.children) {
      const nextNode = currentNode.children[char];
      this.getAllWordsRecursive(nextNode, prefix + char, words);
    }
  }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple"));
console.log(trie.search("banana"));
console.log(trie.search("orange"));
console.log(trie.search("grape")); 

console.log(trie.startsWith("app"));
console.log(trie.startsWith("ban"));
console.log(trie.startsWith("ora"));
console.log(trie.startsWith("gr")); 

trie.delete("apple");
console.log(trie.search("apple")); 

console.log(trie.isEmpty()); 

console.log(trie.getAllWords());