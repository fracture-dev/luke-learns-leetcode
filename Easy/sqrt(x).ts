function mySqrt(x) { 
    for (var i = 1; x >= 0; i++) {
        x -= (2 * i - 1)
        console.log(x)
    }
    return i - 2; 
}

console.log(mySqrt(36));