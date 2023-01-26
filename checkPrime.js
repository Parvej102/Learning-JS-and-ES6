function check(num){
        
    for(i=2; i<num; i++){
        if(num % i == 0){
         return "the number is not prime number" }
        }
    return "the number is a prime number"}
    var result = check(11);
    console.log(result);