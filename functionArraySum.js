function getArray(numbers){
    var sum = 0;
    for(i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
    var numbers = [25, 55, 35, 65];
    result = getArray(numbers);
    console.log(result);
