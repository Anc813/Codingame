/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = readline();
var N = parseInt(readline());

var chars = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",    
}

function encodeWord(word) {
    return word.split('').map(function(e){return chars[e]}).join('');
}

var words = [];
var encodedwords = [];
for (var i = 0; i < N; i++) {
    var W = readline();
    words.push(W);
    encodedwords.push(encodeWord(W));
}

encodedwords = encodedwords.filter(function(e){
    return ~L.indexOf(e);
});

var maxwordlength = encodedwords.reduce(function(a,b){return (b.length>a)?b.length:a},0);

var dict = {};

function analyzePart(s) {
    if (s in dict) return dict[s];

    var sum = 0;
    
    for(var i = 0; i < encodedwords.length; i++) {
        var word = encodedwords[i];
        
        var short = s.slice(0,maxwordlength);

        if (word.length > s.length) continue;

        if (short.indexOf(word) === 0) {
            // analyze rest
            
            var newWord = s.slice(word.length);
            
            if (newWord) {
                var restsum = analyzePart(newWord);
                if (restsum) {
                    sum += restsum;
                }
            } else sum++;
        }
    }
    
    dict[s] = sum;
    return sum;
}
// Write an action using print()
// To debug: printErr('Debug messages...');
var result = analyzePart(L);
print(result);
