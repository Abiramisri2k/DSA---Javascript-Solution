/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let T = [0,1,1];
    for(let i = 3; i <= n; i++){
        T[i] = T[i-1] + T[i-2] + T[i-3];
    }
    return T[n]
};

// Time complexity: O(n)
// Space complexity: O(n)