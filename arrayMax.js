var marks = [33,54,55,66,99,77,44,88];
var maxNumber = marks[0];
for(i=0; i < marks.length; i++){
    var element = marks[i];
if(element > maxNumber){
    maxNumber = element;
}
}
    console.log ("The highst number is",maxNumber );