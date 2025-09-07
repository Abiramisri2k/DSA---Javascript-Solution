/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxprofit) {
        maxprofit = prices[j] - prices[i];
      }
    }
  }
  return maxprofit;
};

//Time complexity - O(n²), where n = prices.length.
//Space complexity - O(1)(constant extra space).
