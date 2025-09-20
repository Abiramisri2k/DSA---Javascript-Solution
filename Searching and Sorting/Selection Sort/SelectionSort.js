function selectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [4,5,1,3,9];
console.log(selectionSort(arr));

// Time Complexity: O(n²)(two nested loops).
// Space Complexity: O(1) (in-place sorting).