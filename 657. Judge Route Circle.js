/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    var step = moves.split("")
    var x = 0;
    var y = 0;
    for(var i =0; i<step.length; i++){
        if(step[i] =="U"){
            y++;
        }
        else if(step[i]=="D"){
            y--;
        }
        else if(step[i]=="R"){
            x++;
        }
        else {
            x--;
        }
    }
    console.log(x+y)
    if (y ==0 && x== 0){
        return true
    }else{return false}
      
};

//Thinking

/*
set original place is on 0,0
and plit moves than go the steps
last if y and x is also = 0
then it is circle else is not.
*/