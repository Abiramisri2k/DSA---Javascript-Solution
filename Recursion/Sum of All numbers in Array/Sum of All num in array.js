let arr = [5, 2, 6, 1, 3];

    function sum(n) {
    if (n === 0) return arr[0];
    return arr[n] + sum(n - 1);
    }
console.log(sum(arr.length - 1));

//Time Complexity → O(n) (one call per element).
//Space Complexity → O(n) (due to recursion call stack).