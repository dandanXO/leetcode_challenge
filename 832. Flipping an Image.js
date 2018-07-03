/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(var a =0;a<A.length;a++){
        A[a]= A[a].reverse()
        for(var b = 0;b<A[a].length;b++){ 
            if (A[a][b] == 1){
                A[a][b] = 0
            }else{
                A[a][b] = 1
            }
        }
    }
    
    return A
};

//Thinking

/*
first  reverse the row of the image 
next invert each 0 to 1 and each 1 to 0
*/