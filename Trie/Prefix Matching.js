
class TrieNode {
  constructor() {
    this.children = new Map();
    // this.isEndOfWord = false;
    this.words = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    console.log('current.children', current.children)
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }

      current = current.children.get(char);
      console.log('current', current)

      current.words.push(word);
      console.log('current.words', current.words)

    }
    // current.isEndOfWord = true;
  }

  matchPrefix(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children.has(char)) {
        return [];
      }
      current = current.children.get(char);
    }
    return current.words;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("apply");
trie.insert("banana");
console.log(trie.matchPrefix("app"));
console.log(trie.matchPrefix("ban"));
