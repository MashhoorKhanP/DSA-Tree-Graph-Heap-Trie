
class MinHeap{
  
    constructor(){
      
      this.heap=[];
    }
    
    getParentIndex(childIndex){
      
      return Math.floor((childIndex-1)/2);
    }
    
    getLeftChildIndex(parentIndex){
      
      return 2 * parentIndex+1;
    }
    
    getRightChildIndex(parentIndex){
      
      return 2 * parentIndex+2;
    }
    
    hasParentIndex(index){
      
      return this.getParentIndex(index)>=0;
    }
    
    hasLeftChildIndex(index){
      
      return this.getLeftChildIndex(index)<this.heap.length;
    }
    
    hasRightChildIndex(index){
      
      return this.getRightChildIndex(index)<this.heap.length;
    }
    
    parent(index){
      
      return this.heap[this.getParentIndex(index)];
    }
    
    left(index){
      
      return this.heap[this.getLeftChildIndex(index)];
    }
    
    right(index){
      
      return this.heap[this.getRightChildIndex(index)];
    }
    
    swap(index1,index2){
      
      [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    
    add(item){
      
      this.heap.push(item);
      this.heapifyUp();
    }
    
    heapifyUp(){
      
      let index=this.heap.length-1;
      
      while(this.hasParentIndex(index) && this.parent(index)>this.heap[index]){
        
        let parentIndex=this.getParentIndex(index);
        
        this.swap(parentIndex,index);
        
        index=parentIndex;
        
      }
      
    }
    
    peek(){
      
      
      if(this.heap.length){
        
      return console.log(this.heap[0]);
        
      }
    }
    
    poll(){
      
      if(this.heap.length===0){
        
        return;
      }
      
      if(this.heap.length===1){
        
        return this.heap.pop();
      }
      
      const element=this.heap[0];
      this.heap[0]=this.heap.pop();
      this.heapifyDown();
      return element;
    }
    
    heapifyDown(){
      
      let index=0;
      
      while(this.hasLeftChildIndex(index)){
        
        let smallIndex=this.getLeftChildIndex(index);
        
        if(this.hasRightChildIndex(index) && this.right(index)<this.left(index)){
          
          smallIndex=this.getRightChildIndex(index);
        }
        
        if(this.heap[index]<this.heap[smallIndex]){
          
          break;
        }else{
          
        this.swap(index,smallIndex);
        }
        
        index=smallIndex;
      }
      
    }
  
  
  }
  
  const mh=new MinHeap()
  
  mh.add(40);
  mh.add(20);
  mh.add(24);
  mh.add(12);
  mh.poll();
  console.log(mh)
  //mh.peek()
  