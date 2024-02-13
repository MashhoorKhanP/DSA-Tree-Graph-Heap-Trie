class Graph {
    constructor() {
      this.edges = {}; 
    }
  
    shortestPath(vertex1, vertex2) {
      const queue = [vertex1];
      const visited = new Set();
      const prev = {};
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        visited.add(currentVertex);
  
        if (currentVertex === vertex2) {
          return this.reconstructPath(prev, vertex1, vertex2);
        }
  
        const neighbors = this.edges[currentVertex];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor) && !queue.includes(neighbor)) {
            queue.push(neighbor);
            prev[neighbor] = currentVertex;
          }
        }
      }
  
      return null;
    }
  
    reconstructPath(prev, start, end) {
      const path = [];
      let currentVertex = end;
  
      while (currentVertex !== start) {
        path.unshift(currentVertex);
        currentVertex = prev[currentVertex];
      }
  
      path.unshift(start);
      return path;
    }
  }
  
 
  const graph = new Graph();
  
  
  graph.edges = {
    A: ["B", "C"],
    B: ["A", "C", "D"],
    C: ["A", "B", "D"],
    D: ["B", "C"]
  };
  
  console.log(graph.shortestPath("A", "C"));
  