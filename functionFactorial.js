function factorial(n){
   var factorial = 1;
    for(i=1; i<=n; i++){
    factorial = factorial*i;
    }
    return factorial;
}
result = factorial(5);
console.log(result);