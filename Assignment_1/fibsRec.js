const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


function fibsRec(n) {
    if(n <= 0) {
        return 'Enter a valid value';
    } else if(n === 1) {
        return[0];
    } else if(n === 2) {
        return[0, 1];
    } else {
        let arr = fibsRec(n-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        return arr;
    }
}

readline.question("Enter number of elements ", (n) => {
    console.log(fibsRec(Number(n)));
    readline.close();
});