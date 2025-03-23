/*
1672. Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

var maximumWealth = function(accounts) {
    wealth = [];
    for(let i=0; i<accounts.length; i++){
        let arr = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        wealth.push(arr);
    }
    wealth.sort((a, b) => a - b);
    return wealth[wealth.length-1];
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));

var maximumWealth = function(accounts) {
    let maxWealth = 0;
  
    for (let i = 0; i < accounts.length; i++) {
      const currentWealth = accounts[i].reduce((sum, amount) => sum + amount, 0);
      maxWealth = Math.max(maxWealth, currentWealth);
    }
  
    return maxWealth;
  };

  console.log(maximumWealth([[1,5],[7,3],[3,5]]));