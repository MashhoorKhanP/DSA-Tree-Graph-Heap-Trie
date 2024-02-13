class Graph {
    constructor() {
      this.edges = {};
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.edges[vertex1]) {
        this.edges[vertex1] = [];
      }
      if (!this.edges[vertex2]) {
        this.edges[vertex2] = [];
      }
  
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    areConnected(vertex1, vertex2) {
      const queue = [vertex1];
      const visited = new Set();
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        visited.add(currentVertex);
  
        if (currentVertex === vertex2) {
          return true;
        }
  
        const neighbors = this.edges[currentVertex];
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
  
      return false;
    }
  }
  
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  
  console.log(graph.areConnected("A", "C")); 
  console.log(graph.areConnected("A", "D")); 
  console.log(graph.areConnected("B", "D")); 
  console.log(graph.areConnected("A", "E")); 
  