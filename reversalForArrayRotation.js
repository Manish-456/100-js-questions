function reverseArray(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp; 
        start++;
        end--
    }
}

function rotateArray(arr, d, n){
    if(d === 0) return;

    d = d % n;

    reverseArray(arr, 0, d-1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

let arr = [1,2,3,4,5,6];
let n = arr.length;
let d = 2;

rotateArray(arr, d, n);
console.log(arr);
