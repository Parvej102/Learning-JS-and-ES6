var word = "amar sonar bangla ami tomay bhalobasi. Cirodin tomar akash tomar batash"
count = 0;
    for(i=0; i<word.length; i++){
       var element = word[i];
        if(element == " "){
            count++;
        }
    }
    count++;
    console.log(count);