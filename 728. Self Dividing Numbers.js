/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var ans = [];

    for (var i = left ; i<=right ;i++){
       var jage = true;
       var s = i.toString().split("");
        for(var j = 0; j<s.length;j++){
           if( i %  parseInt(s[j]) != 0){
               jage = false;
           } 
        }
        if(jage == true){
            ans.push(i);
            console.log(i);
        }
    }
    return ans;
};


// Thinking

/*
left to right is a range use for to visit each then
split THIS number and dividing it self if have remainder "jadge" will change to false
then it will note add to the answer.
*/