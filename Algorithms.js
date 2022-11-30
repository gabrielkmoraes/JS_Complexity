function merge(arr, l, m, r){
      var n1 = m - l + 1;
      var n2 = r - m;
   
      // Cria arrays temporárias
      var L = new Array(n1);
      var R = new Array(n2);
   
      //Copia os dados para cada array
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
   
      // Merge the temp arrays back into arr[l..r]
   
      // Indice da primeira array
      var i = 0;
   
      // Indice da segunda array
      var j = 0;
   
      // Indice da array dividida
      var k = l;
   
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
   
      // Copia os demais elementos de L[]
      // Caso tenha algum
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
   
      
      // Copia os demais elementos de L[]
      // Caso tenha algum
  while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
   
  
  function mergeSort(arr,l, r){
      if(l>=r){
          return;//Recursividade termina
      }
    //Nova array:
      var m =l+ parseInt((r-l)/2);
      mergeSort(arr,l,m);
      mergeSort(arr,m+1,r);
      merge(arr,l,m,r);
  }
  
  
  
  
  
  
  function partition(arr, start, end){
      // Taking the last element as the pivot
      const pivotValue = arr[end];
      let pivotIndex = start; 
      for (let i = start; i < end; i++) {
          if (arr[i] < pivotValue) {
          // Swapping elements
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          // Moving to next element
          pivotIndex++;
          }
      }
      
      // Putting the pivot value in the middle
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
      return pivotIndex;
  };
  
  function quickSortRecursive(arr, start, end) {
      // Base case or terminating case
      if (start >= end) {
          return;
      }
      
      // Returns pivotIndex
      let index = partition(arr, start, end);
      
      // Recursively apply the same logic to the left and right subarrays
      quickSortRecursive(arr, start, index - 1);
      quickSortRecursive(arr, index + 1, end);
  }
  
  function bblSort(arr){
      
   for(var i = 0; i < arr.length; i++){
      
     // Last i elements are already in place 
     for(var j = 0; j < ( arr.length - i -1 ); j++){
        
       // Checking if the item at present iteration
       // is greater than the next iteration
       if(arr[j] > arr[j+1]){
          
         // If the condition is true then swap them
         var temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j+1] = temp
       }
     }
   }
      
  }
  
  function selectionSort(inputArr) { 
      let n = inputArr.length;
          
      for(let i = 0; i < n; i++) {
          // Finding the smallest number in the subarray
          let min = i;
          for(let j = i+1; j < n; j++){
              if(inputArr[j] < inputArr[min]) {
                  min=j; 
              }
           }
           if (min != i) {
               // Swapping the elements
               let tmp = inputArr[i]; 
               inputArr[i] = inputArr[min];
               inputArr[min] = tmp;      
          }
      }
      return inputArr;
  }
  
  
  
  
  function insertionSort(inputArr) {
      let n = inputArr.length;
          for (let i = 1; i < n; i++) {
              // Choosing the first element in our unsorted subarray
              let current = inputArr[i];
              // The last element of our sorted subarray
              let j = i-1; 
              while ((j > -1) && (current < inputArr[j])) {
                  inputArr[j+1] = inputArr[j];
                  j--;
              }
              inputArr[j+1] = current;
          }
      return inputArr;
  }
  
  
  function merge(arr, l, m, r){
      var n1 = m - l + 1;
      var n2 = r - m;
   
      // Cria arrays temporárias
      var L = new Array(n1);
      var R = new Array(n2);
   
      //Copia os dados para cada array
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
   
      // Merge the temp arrays back into arr[l..r]
   
      // Indice da primeira array
      var i = 0;
   
      // Indice da segunda array
      var j = 0;
   
      // Indice da array dividida
      var k = l;
   
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
   
      // Copia os demais elementos de L[]
      // Caso tenha algum
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
   
      
      // Copia os demais elementos de L[]
      // Caso tenha algum
  while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
   
  
  function mergeSort(arr,l, r){
      if(l>=r){
          return;//Recursividade termina
      }
    //Nova array:
      var m =l+ parseInt((r-l)/2);
      mergeSort(arr,l,m);
      mergeSort(arr,m+1,r);
      merge(arr,l,m,r);
  }
  
  // função InsertSort
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Gerando função random 
  let array = [];
  for (let i = 0 ; i < 100000 ; i++){
    array.push(getRandom(0,1000));
  }
  
  
   
      var arr_size = array.length;
      
   
   
  
  const startMerge = Date.now();
      mergeSort(array, 0, arr_size - 1);
  
  const endMerge = Date.now();
  
  const startInsert = Date.now();
  insertionSort(array);
  const endInsert = Date.now();
  
  const startBubble = Date.now();
  bblSort(array);
  const endBubble = Date.now();
  
  const startSelection = Date.now();
  selectionSort(array);    
  const endSelection = Date.now();
  
  const startQuick = Date.now();
  quickSortRecursive(array, 0, array.length - 1)
  const endQuick = Date.now();
  
  
  const finalInsert = endInsert - startInsert;
  const finalBubble = endBubble - startBubble;
  const finalSelection = endSelection - startSelection;
  const finalQuick = endQuick - startQuick;
  const finalMerge = endMerge - startMerge;
  console.log("Insert: " + finalInsert);
  console.log("Bubble: " + finalBubble);
  console.log("Selection: " + finalSelection);
  console.log("Quick: " + finalQuick);
  console.log("MergeSort " + finalMerge);
  
  
  
  
  