// To genetrate Array between two integers of 1 step length

function GenerateArray(a, b) {
    let arr = new Array();
    for (let i = a; i<=b; i++){
        arr.push(i);
    }
    return arr;
}

let arr = GenerateArray(2, 10);
console.log(arr);