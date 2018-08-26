/**
 * @param {number} n
 * @return {number}
 */
//Fisrt will be Time Limit Exceeded

var climbStairs = function(n) {
    var count= 0
     search(n)
    function search(n) {
        
        if(n == 0){
             count ++
            return count
        }
         if (n-1 >=0){
               
            search(n-1)
        }
        if (n-2>=0){
               
             search(n-2)
        }
        
    }
   // console.log(count)
    return count
};
// find Fibonacci is same.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if(n<=1){
        return 1;
    }

    var prev = 1;
    var cur  = 1;
//Fibonacci
    for(var i = 2 ; i <=n ; i++){
        var temp = cur;
        cur = cur + prev;
        prev = temp;
    }
    return cur;
};