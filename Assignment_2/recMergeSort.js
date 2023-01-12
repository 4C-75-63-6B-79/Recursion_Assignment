const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    } else {
        const leftArr = mergeSort(arr.slice(0, arr.length/2));
        const rightArr = mergeSort(arr.slice(arr.length/2));
        let l=0, r=0;
        const mergedArr = [];
        while(l<leftArr.length && r<rightArr.length) {
            if(leftArr[l] < rightArr[r]) {
                mergedArr.push(leftArr[l]);
                l += 1;
            } else {
                mergedArr.push(rightArr[r]);
                r += 1;
            }
        }
        for(;l<leftArr.length; l++) {
            mergedArr.push(leftArr[l]);
        }
        for(;r<rightArr.length; r++) {
            mergedArr.push(rightArr[r]);
        }
        return mergedArr;
    }
}

console.log('original array: ' + [] + ' sorted array : ' + mergeSort([]));
console.log('original array: ' + [10,5,3,7,1,8,13,15] + ' sorted array : ' + mergeSort([10,5,3,7,1,8,13,15]));
console.log('original array: ' + [5,6,4,2,1] + ' sorted array : ' + mergeSort([5,6,4,2,1]));
console.log('original array: ' + [5,6,4,1] + ' sorted array : ' + mergeSort([5,6,4,1]));
