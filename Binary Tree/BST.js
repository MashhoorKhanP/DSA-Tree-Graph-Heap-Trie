
// class Node{

//     constructor(data){

//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
// }

// class BinarySearchTree{

//     constructor(){

//         this.root=null;
//     }

//     insert(data){

//         const newNode=new Node(data);

//         if(!this.root){

//             this.root=newNode;
//         }else{

//             this.insertNode(this.root,newNode);
//         }
//     }

//     insertNode(root,newNode){

//         if(newNode.data<root.data){

//             if(!root.left){

//                 root.left=newNode;
//             }else{

//                 this.insertNode(root.left,newNode);
//             }
//         }else{

//             if(!root.right){

//                 root.right=newNode;
//             }else{

//                 this.insertNode(root.right,newNode);
//             }
//         }
//     }

    
// }

// const bst=new BinarySearchTree()

// bst.insert(50);
// bst.insert(20);
// bst.insert(60);
// bst.insert(30)

// console.log(bst);


class Node{

    constructor(data){
      this.data=data;
      this.left=null;
      this.right=null;
    }
  }
  
  class BinarySearchTree{
    
    constructor(){
      this.root=null;
    }
    //Insert data to a tree;
    insert(data){
      
      const newNode=new Node(data);
      
      if(!this.root){
        
        this.root=newNode;
      }else{
        
        this.insertNode(this.root,newNode);
      }
    }
    //BST- Insert Node method to check to left or right;
    insertNode(root,newNode){
      
      if(newNode.data<root.data){
        
        if(!root.left){
          
          root.left = newNode;
        }else{
          
          this.insertNode(root.left,newNode);
        }
      }else{
        
        if(!root.right){
          
          root.right=newNode;
        }else{
          
          this.insertNode(root.right,newNode);
        }
      }
    }
    
    //BST-Search Node;
    search(root,data){

       if(!root){

        return;
       }
       if(root.data===data){

        return console.log(true);
       }else if(data<root.data){

         return this.search(root.left,data);
       }else{

        return  this.search(root.right,data);
       }
    }
    //DFS -PreOrder Travesal;
    preOrder(root){

      if(root){

        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }

    //DFS- InOrder Travesal;

    inOrder(root){

      if(root){

        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
      }
    }

    //DFS- PostOrder Travesal;

    postOrder(root){

      if(root){

        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
      }
    }

    //BFS- LevelOrder Method using Queue;

    levelOrder(){

      const queue=[];
      queue.push(this.root);

      while(queue.length){

        let current=queue.shift();
        console.log(current.data);

        if(current.left){

          queue.push(current.left)
        }
        if(current.right){

          queue.push(current.right);
        }
      }
    }

    //BFS - Min element
    min(root){

      if(!root.left){

        return console.log(root.data);
      }else{

        return this.min(root.left);
      }
    }

    //BFS - Max element

    max(root){

      if(!root.right){
        return console.log(root.data);
      }else{
        return this.max(root.right);
      }
    }

    //Delete a node in tree;

    delete(data){

      this.root=this.deleteNode(this.root,data);
    }

    deleteNode(root,data){

      if(!root){

        return root;
      }

      if(data<root.data){

        root.left=this.deleteNode(root.left,data);
      }else if(data>root.data){

        root.right=this.deleteNode(root.right,data);
      }else{

        if(!root.left && !root.right){

          return;
        }

        if(!root.left){

          return root.right;
        }else if(!root.right){

          return root.left;
        }

        root.data=this.min(root.right);
        root.right=this.deleteNode(root.right,data);
      }
      return root;
    }
    //BST Validation:
    isBST(root,min,max){

      if(!root){
          return true;
      }

      if(root.data <min || root.data >max){

          return false;
      }

      return (

          this.isBST(root.left,min,root.data)&&
          this.isBST(root.right,root.data,max)
      )
    }

    // BST Balanced Or Not:

    getHeight(root){

      if(!root){

          return 0;
      }else{

          let leftHeight=this.getHeight(root.left);
          let rightHeight=this.getHeight(root.right);
          return Math.max(leftHeight,rightHeight)+1;
      }
  }

  isBalanced(root){

      if(!root){
        
        return true;
      }
      const leftHeight=this.getHeight(root.left);
      const rightHeight=this.getHeight(root.right);

      if(Math.abs(leftHeight-rightHeight>1)){
          
          return false;
      }

      const leftBalanced=this.isBalanced(root.left);
      const rightBalanced=this.isBalanced(root.right);
      return leftBalanced && rightBalanced;
      
  }
   
}
  
  
  const bst=new BinarySearchTree();
  
  bst.insert(40);
  bst.insert(20);
  bst.insert(50);
  bst.delete(50);
  bst.levelOrder()
  bst.preOrder(bst.root);
  bst.max(bst.root);
  bst.min(bst.root);
  console.log(bst.isBST(bst.root,Number.MIN_VALUE,Number.MAX_VALUE));
  bst.search(bst.root,20);