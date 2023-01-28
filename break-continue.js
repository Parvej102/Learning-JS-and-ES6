//break = always stop your code when breaking condition.
const num = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < num.length; i++) {
        if(num[i] > 4){
            break;
        }
        //console.log(num[i]);
        
    }
// continue = when condition is true (continue) ignore this number..
    const num2 =[1,-2,3,4,-5,-6,7,8,9,];
        for(i=0; i<num2.length; i++){
            if(num2[i] < 0){
                continue;
            }
            console.log(num2[i])
        }
