class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    removeEdge(vertex1, vertex2) {
      this.edges[vertex1] = this.edges[vertex1].filter(v => v !== vertex2);
      this.edges[vertex2] = this.edges[vertex2].filter(v => v !== vertex1);
    }
  }
  
  const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log(graph.edges);

graph.removeEdge("A", "B");

console.log(graph.edges);
