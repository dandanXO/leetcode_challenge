/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  
    // console.log(num.toString(2))
     var str =num.toString(2);
     var strArr = str.split("");
     var ans ="";
     var ansN = 0;
     for (var i = 0; i<strArr.length; i++){
         if(strArr[i] == "0"){
             strArr[i]=1;
             ans += strArr[i];
         }else{
             strArr[i]=0;
              ans += strArr[i];
         }
     }
    
     ansN = parseInt(ans,2);
  //console.log(ansN)
     return ansN
 };


 // Thinking
 
 /*
 * 10-base number conver to binary number and change one to zero and zero to one
 * last this final binary number change back to 10-base number is answer.
 */

 // other best way
 /*
 parseInt(num.toString(2).split('').map(n => parseInt(n) ^ 1).join(''), 2);
 */