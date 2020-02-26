/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let i;
    let result = '';
    
    for (i = 0; i < str.length; i++) {
        const character = str[i];
        result += /^[A-Z]/.test(character) 
            ? String.fromCharCode(character.charCodeAt(0) + 32) 
            : character;
    }
    
    return result;
};
