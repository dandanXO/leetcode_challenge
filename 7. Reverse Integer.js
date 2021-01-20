/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var reverseN = +String(Math.abs(x)).split('').reverse().join('');
  if (reverseN > 0x7FFFFFFF) {
      return 0;
  }
  return x < 0 ? -reverseN : reverseN;
};