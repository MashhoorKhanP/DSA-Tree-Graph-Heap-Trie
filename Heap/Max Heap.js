

class MaxHeap{
  
    constructor(){
      
      this.heap=[];
    }
    
    getParentIndex(index){
      
      return Math.floor((index-1)/2);
    }
    
    getLeftChildIndex(index){
      
      return 2*index+1;
    }
    
    getRightChildIndex(index){
      
      return 2 * index+2;
    }

    hasParent(index){
      
      return this.getParentIndex(index)>=0;
    }
    
    hasLeftChild(index){
      return this.getLeftChildIndex(index)<this.heap.length;
    }
    
    hasRightChild(index){
      
      return this.getRightChildIndex(index)<this.heap.length;
    }
    
    leftChild(index){
      
      return this.heap[this.getLeftChildIndex(index)];
    }
    
    rightChild(index){
      
      return this.heap[this.getRightChildIndex(index)];
    }
    
    parent(index){
      
      return this.heap[this.getParentIndex(index)];
    }
    
    add(item){
      
      this.heap.push(item);
      this.heapifyUp();
    }
    
    swap(index1,index2){
      
      return [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]];
    }
    
    poll(){
      
      if(this.heap.length===0){
        
        return;
      }
      if(this.heap.length===1){
        
        return this.heap.pop();
      }
      
      const item=this.heap[0];
      this.heap[0]=this.heap.pop();
      this.heapifyDown();
      return console.log(item);
    }
    
    heapifyUp(){
      
      let index=this.heap.length-1;
      while(this.hasParent(index) && this.parent(index)<this.heap[index]){
        
        const parentIndex=this.getParentIndex(index);
        this.swap(parentIndex,index);
        index=parentIndex;
      }
    }
    
    heapifyDown(){
      
      let index=0;
      while(this.hasLeftChild(index)){
        
        let smallerChildIndex=this.getLeftChildIndex(index);
        if(this.hasRightChild(index) && this.rightChild(index)>this.leftChild(index)){
          
          smallerChildIndex=this.getRightChildIndex(index);
        }
        
        if(this.heap[index]<this.heap[smallerChildIndex]){
          
          break;
        }else{
          
          this.swap(index,smallerChildIndex);
        }
        
        index=smallerChildIndex;
      }
    }
  }
  
  const maxHeap=new MaxHeap()
  
  maxHeap.add(53);
  maxHeap.add(40);
  maxHeap.add(4);
  maxHeap.add(60);
  
  maxHeap.poll()
  
  