function factorial(n) {

    var i = 1
    var factorial = 1;
    while (i <= n) {
        i++;
        factorial = factorial * i;
    }
    return factorial;
}
result = factorial(5)
console.log(result)