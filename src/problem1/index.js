
/* Sum to N
  total = 1 + 2 + 3 + ... + n
*/
var sum_to_n_a = function (n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/* Recursive solution 
  total = n + sum_to_n(n-1)
*/
var sum_to_n_b = function (n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

/* Mathematical solution 
  example: n = 4
  total = 1 + 2 + 3 + 4 = 5 + 5 = 5 * 2 = (n+1) * (n/2)
  general formula:
  total = n * (n + 1) / 2
*/
var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n_a(6));
console.log(sum_to_n_b(4));
console.log(sum_to_n_c(5));
