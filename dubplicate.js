var id =[2, 4, 5, 6, 8, 4, 9, 6, 8];
uniqueId = [];
    for(i=0; i<id.length; i++){
        var element = [i];
        var index = uniqueId.indexOf(element);
        if(index == -1){
            uniqueId.push(element);
        }
    }
    console.log(uniqueId);