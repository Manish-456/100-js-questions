/**
 * Given two strings needle and haystack, return the index of the first occurance of needle in haystack,
 *  or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.substring(i, i + needle.length) === needle){
            return i;
        }
    }
    return -1
};

/**
 * Example 1:
 * Input : haystack = "sadbutsad", needle = "sad"
 * Output : 0,
 * Explanation : "sad" occurs at index 0 and 6, so we return 0.
 */

/**
 * Example 2:
 * Input: haystack = "leetcode",
 * needle :"leeto",
 * output : -1,
 * explanation: "leeto" didnot occur in "leetcode", so we return -1
 */

let result = strStr("sasdfddfbutsad", "sad");
console.log(result)
