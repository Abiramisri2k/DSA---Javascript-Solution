/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currCount = 0;
    let maxCount = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            currCount++;
        }else{
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    return Math.max(maxCount, currCount);
};

//Time Complexity: O(n), Space Complexity: O(1)