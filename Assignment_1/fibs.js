const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fibs(n) {
    let arr = [0, 1];
    for(let i=0; i<6; i++) {
        let nextElement = arr[i] + arr[i+1];
        arr.push(nextElement);
    }
    return arr;
}

readline.question("Enter number of elements ", (n) => {
    console.log(fibs(n));
    readline.close();
});