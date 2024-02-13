function heapify(arr,length,parentIndex){

    let largest=parentIndex;
    let left=2*parentIndex+1;
    let right=left+1

    if(left<length && arr[left]<arr[largest]){

        largest=left;
    }

    if(right<length && arr[right]<arr[largest]){

        largest=right;
    }

    if(largest!=parentIndex){

        [arr[parentIndex],arr[largest]]=[arr[largest],arr[parentIndex]];
    }

    return arr;
}

function heapSort(arr){

    let length =arr.length;
    let lastParent=Math.floor(arr.length/2-1);

    let lastChild=arr.length-1;

    while(lastParent>=0){

        heapify(arr,length,lastParent);
        lastParent--;
    }

    while(lastChild>=0){
        [arr[0],arr[lastChild]]=[arr[lastChild],arr[0]];
        heapify(arr,length,lastChild);
        lastChild--;
    }

    return arr;
}

