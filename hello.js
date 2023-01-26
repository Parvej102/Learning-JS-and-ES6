function whatis(year){
    
    var result = year % 4;
    if(result == 0){
        console.log("This year is leap year");
    
    }
    else{
        console.log("This year is not leap year");
    }
    
}
var check = whatis(2000);
var check2 =whatis(2022);
