let arr = [ 1, 13, 1, 10, 34, 12 ]; 
let n = arr.length;

function print3Largest(arr, n){
    let first, second, third;

    first = second = third = Number.MIN_VALUE;

    for (let i = 0; i < n; i++) {
                if(arr[i] > first){
                    third = second;
                    second = first;
                    first = arr[i];
                }else if(arr[i] > second){
                    third = second;
                    second = arr[i];
                }else if(arr[i] > third){
                    third = arr[i];
                }
    }

    return [first, second, third]
};

console.log(print3Largest(arr, n));


function print3LargestEl(arr){
    arr = arr.sort((a, b) => b - a);

    let newArr = [];
    let count = 0;
    while(count <= 3){
        newArr.push(arr[count]);
        count++;
    }
   
    return newArr;
}


