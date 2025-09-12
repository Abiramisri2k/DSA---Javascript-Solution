/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSums = n*(n+1)/2;
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum = sum + nums[i];
    }

    return totalSums - sum;
};

//Time complexity: O(n)
//Space complexity: O(1)