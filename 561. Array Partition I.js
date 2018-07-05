/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var ans = 0;
    nums=nums.sort(function(a, b){return a-b});
    for(var i = 0; i<nums.length; i=i+2){
        ans = ans+ nums[i];
    }
    return ans;
};

//Think

/**
 * sort the array and can find 
 * you can discover the 0,1,3...is min and you want to sum.
 */