
// // class Node{

// //     constructor(data){

// //         this.data=data;
// //         this.left=null;
// //         this.right=null;
// //     }
// // }

// // class BinarySearchTree{

// //     constructor(){

// //         this.root=null;
// //     }

// //     insert(data){

// //         const newNode=new Node(data);

// //         if(!this.root){

// //             this.root=newNode;
// //         }else{

// //             this.insertNode(this.root,newNode);
// //         }
// //     }

// //     insertNode(root,newNode){

// //         if(newNode.data<root.data){

// //             if(!root.left){

// //                 root.left=newNode;
// //             }else{

// //                 this.insertNode(root.left,newNode);
// //             }
// //         }else{

// //             if(!root.right){

// //                 root.right=newNode;
// //             }else{

// //                 this.insertNode(root.right,newNode);
// //             }
// //         }
// //     }

    
// // }

// // const bst=new BinarySearchTree()

// // bst.insert(50);
// // bst.insert(20);
// // bst.insert(60);
// // bst.insert(30)

// // console.log(bst);


// class Node{
  
//     constructor(data){
      
//       this.data=data;
//       this.left=null;
//       this.right=null;
//     }
//   }
  
//   class BinarySearchTree{
    
//     constructor(){
      
//       this.root=null;
//     }
//     //Insert data to a tree;
//     insert(data){
      
//       const newNode=new Node(data);
      
//       if(!this.root){
        
//         this.root=newNode;
//       }else{
        
//         this.insertNode(this.root,newNode);
//       }
//     }
//     //BST- Insert Node method to chech to left or right;
//     insertNode(root,newNode){
      
//       if(newNode.data<root.data){
        
//         if(!root.left){
          
//           root.left=newNode;
//         }else{
          
//           this.insertNode(root.left,newNode);
//         }
//       }else{
        
//         if(!root.right){
          
//           root.right=newNode;
//         }else{
          
//           this.insertNode(root.right,newNode);
//         }
//       }
//     }
    
//     //BST-Search Node;
//     search(root,data){

//        if(!root){

//         return;
//        }
//        if(root.data=data){

//         return console.log(true);
//        }else if(data<root.data){

//          return this.search(root.left,data);
//        }else{

//         return  this.search(root.right,data);
//        }
//     }
//     //DFS -PreOrder Travesal;
//     preOrder(root){

//       if(root){

//         console.log(root.data);
//         this.preOrder(root.left);
//         this.preOrder(root.right);
//       }
//     }

//     //DFS- InOrder Travesal;

//     inOrder(root){

//       if(root){

//         this.inOrder(root.left);
//         console.log(root.data);
//         this.inOrder(root.right);
//       }
//     }

//     //BFS- LevelOrder Method using Queue;

//     levelOrder(){

//       const queue=[];
//       queue.push(this.root);

//       while(queue.length){

//         let current=queue.shift();
//         console.log(current.data);

//         if(current.left){

//           queue.push(current.left)
//         }
//         if(current.right){

//           queue.push(current.right);
//         }
//       }
//     }

//     //BFS - Min element
//     min(root){

//       if(!root.left){

//         return console.log(root.data);
//       }else{

//         return this.min(root.left);
//       }
//     }

//     //BFS - Max element

//     max(root){

//       if(!root.right){

//         return console.log(root.data);
//       }else{

//         return this.max(root.right);
//       }
//     }

//     //Delete a node in tree;

//     delete(data){

//       this.root=this.deleteNode(this.root,data);
//     }

//     deleteNode(root,data){

//       if(!root){

//         return root;
//       }

//       if(data<root.data){

//         root.left=this.deleteNode(root.left,data);
//       }else if(data>root.data){

//         root.right=this.deleteNode(root.right,data);
//       }else{

//         if(!root.left && !root.right){

//           return;
//         }

//         if(!root.left){

//           return root.right;
//         }else if(!root.right){

//           return root.left;
//         }
//         root.data=this.min(root.right);
//         root.right=this.deleteNode(root.right,data);
//       }
//       return root;
//     }
   
//   }
  
  
//   const bst=new BinarySearchTree();
  
//   bst.insert(40);
//   bst.insert(20);
//   bst.insert(50);
//   bst.delete(20);
//   bst.levelOrder()
//   //console.log(bst)
//   // bst.max(bst.root);
//   // bst.min(bst.root);
//   //console.log(bst.search(bst.root,20));
//   //bst.preOrder(bst.root);

class Stack {
  constructor(){
      this.stack = []
  }




  isEmpty(){
      return this.stack.length === 0;
  }




  getSize(){
      return console.log(this.stack.length);
  }
 
  push(data){
      this.stack.push(data)
  }




  pop(){
      if(this.isEmpty()){
          return "Empty"
      }else{
          return this.stack.pop()
      }
  }




  peek(){
      if(this.isEmpty()){
          return null
      }else{
          return console.log(this.stack[this.stack.length -1])
      }
  }




}




class Queue{
  constructor(){
    this.mstack = new Stack()
    this.subStack = new Stack()
  }




  isEmpty(){
      return this.mstack.isEmpty()
  }




  getSize(){
      return (this.mstack.getSize())
  }




  enqueue(data){
      this.mstack.push(data)
  }




  dequeue(){
      let size = this.mstack.stack.length;




      for(let i=0; i<size-1; i++){
          this.subStack.push(this.mstack.pop())
      }




      let dequeueValue = this.mstack.pop()




      for(let i=0; i<size-1; i++){
          this.mstack.push(this.subStack.pop())
      }




      return dequeueValue;
  }




  peekFront(){
      let size = this.mstack.stack.length;




      for(let i=0; i<size-1; i++){
          this.subStack.push(this.mstack.pop())
      }




      let peekValue = this.mstack.peek()




      for(let i=0; i<size-1; i++){
          this.mstack.push(this.subStack.pop())
      }




      return peekValue;
  }
}




const q = new Queue()




console.log(q.isEmpty());
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.getSize());
console.log(q.peekFront());
console.log(q.dequeue());
console.log(q.peekFront());
console.log(q.isEmpty());