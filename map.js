const number =[2, 3, 4, 5, 6];
const result = number.map(function(element){
    return element * element;
})
console.log(result);

// shortcut method
const number2 = [5, 6, 7, 9,];
const result2 = number2.map( x=> x * x);
console.log(result2);