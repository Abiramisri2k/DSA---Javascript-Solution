var fib = function(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
};

// Time: O(2^n) (lots of repeated calculations).
// Space: O(n) (recursive call stack depth).