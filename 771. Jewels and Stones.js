/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var  count = 0;
      var Jarray = J.split("");
      var Sarray = S.split("");
      var map = {};
      for (var i = 0; i<Jarray.length;i++){
        for (var j = 0; j<Sarray.length;j++){
              if(Jarray[i] === Sarray[j]){
                  count++;
              }
        
          }
        
      }
     
      return count
      
  }


  // Thinking
  /*
    split two array and jadge two elment if equal than count++
  */