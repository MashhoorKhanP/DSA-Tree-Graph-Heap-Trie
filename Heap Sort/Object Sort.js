function heapSortObjects(arr, property) {
    buildMaxHeapObjects(arr, property);
  
    for (let i = arr.length - 1; i > 0; i--) {
      swapObjects(arr, 0, i);
      heapifyObjects(arr, 0, i, property);
    }
  
    return arr;
  }
  
  function buildMaxHeapObjects(arr, property) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapifyObjects(arr, i, n, property);
    }
  }
  
  function heapifyObjects(arr, i, size, property) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
  
    if (left < size && arr[left][property] > arr[largest][property]) {
      largest = left;
    }
  
    if (right < size && arr[right][property] > arr[largest][property]) {
      largest = right;
    }
  
    if (largest !== i) {
      swapObjects(arr, i, largest);
      heapifyObjects(arr, largest, size, property);
    }
  }
  
  function swapObjects(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  const arrayOfObjects = [
    { name: 'Niyas', age: 22 },
    { name: 'Mashhoor', age: 23 },
    { name: 'Shamil', age:30 },
    { name: 'Sachin', age: 28 }
  ];
  
  console.log(heapSortObjects(arrayOfObjects, 'age'));