class Graph {
    constructor() {
      this.edges = {
        A: ["B", "C"],
        B: ["A"],
        C: ["A"]
      };
    }
  
    dfsTraversal(vertex) {
      const visited = new Set();
      this.dfsHelper(vertex, visited);
    }
  
    dfsHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
  
      const neighbors = this.edges[vertex];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsHelper(neighbor, visited);
        }
      }
    }
  }
  
  const graph = new Graph();
  graph.dfsTraversal("A");
  