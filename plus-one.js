/**
 * @description Given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 *  The large integer does not contain any leading 0's  
 * 
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    // We start by assuming a carry of 1.
    let carry = 1;
  
    // We iterate through the digits array from right to left.
    for (let i = digits.length - 1; i >= 0; i--) {
      // Add the current digit and the carry.
      digits[i] += carry;
  
      // Update the carry for the next iteration.
      carry = Math.floor(digits[i] / 10);
  
      // Update the current digit to its single-digit value.
      digits[i] %= 10;
    }
  
    // If there's still a carry left after the loop, add it as a new digit at the beginning.
    if (carry) {
      digits.unshift(carry);
    }
  
    // Return the modified digits array.
    return digits;
  }
  

  let result = plusOne([4,9,9,9])
  console.log(result) // [5,0,0,0]