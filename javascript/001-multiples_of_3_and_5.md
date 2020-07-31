# Multiples of 3 and 5

## Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## Solution 1

Our approach is: 
1. We take an array of 1...N => we make an array containing anything, it's indices will be an array of 0...N-1. We want N-1 anyways per the question

2. We filter out all the elements that divide by any of the divisors => we map divisor's array (per element) to 1 if it divides else 0. If the sum of this mapped array is not 0, we know atleast ONE number divides the element

3. We sum the resulting filtered array

#### Note
PS: The sumArrya method is only there cuz we need to do that operation twice

PSS: I'm not trying to optimise for time or space. Rather building a generalized solution that can work for any max number & any number of divisors. I'm sure there's more efficient ways to do this than mine :)