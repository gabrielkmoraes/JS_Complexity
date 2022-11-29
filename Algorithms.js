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
 
 
