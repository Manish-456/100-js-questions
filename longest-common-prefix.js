/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function (strs) {
    if(strs.length === 0 || !strs){
        return ""
    } 

    let prefix = strs[0];

    strs.slice(1).forEach(string => {
        let i = 0;

        while(i < prefix.length && i < string.length && prefix[i] === string[i]){
            i++;
        }

        prefix = prefix.slice(0, i);

        if(prefix.length === 0) return;
    })

    return prefix;
};

// strs = ["flower", "flow", "fly"]
// output = "fl"

let result = longestCommonPrefix(["flower", "flow", "fly"]);
console.log(result);
