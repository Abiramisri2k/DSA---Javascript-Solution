/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let halflen = len/2;
    for(let i=0; i<halflen; i++){
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
};

//Time complexity - O(n), where n = s.length.
//Space complexity - O(1)(constant extra space).
