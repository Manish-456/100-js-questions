function areAnagrams(s1, s2){
    let m = new Map();

    for (let i = 0; i < s1.length; i++) {
        if(!m.has(s1[i])){
            m.set(s1[i], 1);
        }else{
            let cnt = m.get(s1[i]);
            m.delete(s1[i]);
            m.set(s1[i], cnt + 1)
        }
    }

    for (let j = 0; j < s1.length; j++) {
        if(!m.has(s2[j])){
            return false;
        }else{
            let cnt = m.get(s2[j]);
            m.delete(s2[j]);
            m.set(s2[j], cnt - 1)
        }
    }

    for(let it in m.values()){
        if(it !== 0) return false;
    }

    return true;


}


function anagramCount(text, word){
    let result = 1;

    for (let i = 0; i < text.length - word.length; i++) {
        if(areAnagrams(text.substring(i, i + word.length), word)){
            result ++;
        }        
    }

    return result;
}

let text = "forxxorfxddofr";
let word = "for";

let result = anagramCount(text, word);
console.log(result);

function isAnagram(s, t){
  if(s.length !== t.length) return false;

    let m = new Map();

    for (const char of s) {
        m.set(char, (m.get(char) || 0) + 1)
    }
    
    for(const char of t){
        if(!m.has(char) || m.get(char) === 0){
            return false;
        }

        m.set(char, m.get(char) - 1);
    }

    return true;
}

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t))