/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x=0;
    for(let i=0; i < nums.length; i++){
        if(nums[i]>nums[x]){
            x++;
            nums[x] = nums[i];        
            }
    }
    return x+1;
};

//Time complexity - O(n), where n = nums.length.
//Space complexity - O(1)(constant extra space).