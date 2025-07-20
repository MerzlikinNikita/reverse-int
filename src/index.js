module.exports = function reverse(n) {
  const result = n.toString().split('').reverse().join('');
  return parseInt(result, 10);
};
