// class TrieNode {
//     constructor() {
//       this.children = new Map();
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let current = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!current.children.has(char)) {
//           current.children.set(char, new TrieNode());
//         }
//         current = current.children.get(char);
//       }
//       current.isEndOfWord = true;
//     }
  
//     delete(word) {
//       return this.deleteHelper(this.root, word, 0);
//     }
  
//     deleteHelper(node, word, index) {
//       if (index === word.length) {
//         if (!node.isEndOfWord) {
//           return false;
//         }
//         node.isEndOfWord = false;
//         return node.children.size === 0;
//       }
//       const char = word[index];
//       if (!node.children.has(char)) {
//         return false;
//       }
//       const child = node.children.get(char);
//       const shouldDeleteChild = this.deleteHelper(child, word, index + 1);
//       if (shouldDeleteChild) {
//         node.children.delete(char);
//         return node.children.size === 0;
//       }
//       return false;
//     }
  
//     display() {
//       const words = [];
//       this.traverse(this.root, '', words);
//       console.log(words);
//     }
  
//     traverse(node, prefix, words) {
//       if (node.isEndOfWord) {
//         words.push(prefix);
//       }
//       for (const [char, child] of node.children.entries()) {
//         this.traverse(child, prefix + char, words);
//       }
//     }
//   }
  
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("application");
//   trie.insert("banana");
//   trie.delete("application");
  
//   trie.display();
  
class Node {
  constructor() {
      this.children = {}
      this.isWordEnd = false
  }
}
class trie {
  constructor() {
      this.root = new Node()
  }
  insert(word) {

      let curr = this.root;
      for (let i = 0; i < word.length; i++) {
          let charInsert = word[i]
          if (!(charInsert in curr.children)) {
              curr.children[charInsert] = new Node()
          }
          curr = curr.children[charInsert]
      }
      curr.isWordEnd = true;
  }

contain(word){
 
  let curr = this.root ;
  for(let i = 0 ; i<word.length ; i++){
      let charFind =word[i]
      if(!(charFind  in curr.children)){
          return false;
      }
      curr = curr.children[charFind]
  }
  return curr.isWordEnd;

}
}


const n = new trie()

n.insert("hy")
n.insert("hyAEWRAE")
n.insert("hyASFDAFD")
n.insert("hysfs")
n.insert("hydsa")



const m =    n.contain("hy")

console.log(m)