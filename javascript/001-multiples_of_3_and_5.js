/**
 * The Solution
 * @param {number} n The highest number, below which you want to work
 * @param {Array<number>} divisorsArr An array of numbers who's elements' multiples you want to sum
 * Our approach is: 
 * 1. We take an array of 1...N => we make an array containing anything, it's indices will be an array of 0...N-1. 
 *      We want N-1 anyways per the question
 * 2. We filter out all the elements that divide by any of the divisors => we map divisor's array (per element) to 1 if it divides else 0.
 *      If the sum of this mapped array is not 0, we know atleast ONE number divides the element
 * 3. We sum the resulting filtered array
 * 
 * PS: The sumArrya method is only there cuz we need to do that operation twice
 * PSS: I'm not trying to optimise for time or space. Rather building a generalized solution that can work for any max number & any number of divisors
 *      I'm sure there's more efficient ways to do this than mine :)
 */

const solution = (n, divisorsArr) => {
  const nums1ToN = Array.from(Array(n).keys());
  const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);
  return sumArray(nums1ToN.filter(i => sumArray(divisorsArr.map(d => i%d === 0 ? 1 : 0)) !== 0));
}

const N = 1000, divisors = [3,5];
const ans = solution(N, divisors);
console.log(ans);