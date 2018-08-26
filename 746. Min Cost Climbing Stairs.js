/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var mincost = []
    mincost [0] = cost[0]
    mincost [1] = cost[1]
    
    for(var i = 2 ;i<=cost.length; i++){
        var addV = 0
        if(i==cost.length){
            addV = 0
        }else{
            addV = cost[i]
        }
        mincost[i]=Math.min(mincost[i-1]+addV,mincost[i-2]+addV);
        
    }
    return mincost[cost.length]
    
};

//Think

/**
 * Dynamic Programming
 * 
 *  */