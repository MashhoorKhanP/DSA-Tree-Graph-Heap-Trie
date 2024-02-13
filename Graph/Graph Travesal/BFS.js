
class Graph {
    constructor() {
      this.edges = {}; 
    }
  
    addVertex(vertex) {
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    bfsTraversal(startVertex) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startVertex);
      queue.push(startVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.edges[currentVertex];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  
  graph.bfsTraversal("A");
  