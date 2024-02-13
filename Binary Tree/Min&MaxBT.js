//Min & Max of Binary Tree

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }
  findMax(){
    if(!this.root){
      return;
    }
    let res = this.root.data;
    let lRes = this.findMax(this.root.left);
    let rRes = this.findMax(this.root.right);

    if(lRes > res){
      res  = lRes;
    }
    if(rRes > res){
      res = rRes;
    }
    return res;
  }
  
  findMin(){
    if(!this.root){
      return
    }
    let res = this.root.data;
    let lRes = this.findMin(this.root.left);
    let rRes = this.findMin(this.root.right);
    
    if(lRes < res) res = lRes;
    if(rRes < res) res = rRes;

    return res;
  }
}