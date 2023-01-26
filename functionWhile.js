function factorial(n){
    var i = 1;
   var start = 1;
    while( i <= n){
        start = start * i;
        i++;
        
    }
    return start;
}
    var result = factorial(5);
    console.log(result);
    var result2 = factorial(5);
    console.log(result2);