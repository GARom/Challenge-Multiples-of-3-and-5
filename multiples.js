/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function(n){
  var sum = 0;
  // do your work here
  // for (i = 1; i< n; i++) {
  //   if ((i % 3 === 0) || (i % 5 === 0)) {
  //     sum = sum + i;
  //   }
  // }

  var sum3, sum5, sum15;
  var count;
  // 1. find sum of all multiples of 3 less than n
  // 2. find sum of all multiples of 5 less than n
  // 3. find sum of all multiples of 15 less than n
  // 4. result 1 + result 2 - result 3 = our intended result
  count = Math.floor(( n - 1 ) / 3);
  sum3 = 3 * count * (count + 1) / 2;

  count = Math.floor(( n - 1 ) / 5);
  sum5 = 5 * count * (count + 1) / 2;

  count = Math.floor(( n - 1 ) / 15);
  sum15 = 15 * count * (count + 1) / 2;

  sum = sum3 + sum5 - sum15;


  return sum;
};

