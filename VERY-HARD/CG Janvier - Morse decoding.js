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
    R: ".-.",a/**
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
for (var i = 0; i < N; i++) {
    var W = readline();
    var word = encodeWord(W);
    // filter useless words
    if (~L.indexOf(word)) words.push(word);
}

var maxwordlength = words.reduce(function(a,b){return (b.length>a)?b.length:a},0);

var dict = {};

function analyzePart(s) {
    if (s in dict) return dict[s];

    var sum = 0;
    var short = s.slice(0,maxwordlength);
    
    for(var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word.length > s.length) continue;

        if (short.indexOf(word) === 0) {
            // analyze rest
            var newWord = s.slice(word.length);
            
            sum += (newWord) ? analyzePart(newWord) : 1;
        }
    }
    
    dict[s] = sum;
    return sum;
}
// Write an action using print()
// To debug: printErr('Debug messages...');

print(analyzePart(L));
    Z: "--..",    
}

function encodeWord(word) {
    return word.split('').map(function(e){return chars[e]}).join('');
}

var words = [];
for (var i = 0; i < N; i++) {
    var W = readline();
    var word = encodeWord(W);
    // filter useless words
    if (~L.indexOf(word)) words.push(word);
}

var maxwordlength = words.reduce(function(a,b){return (b.length>a)?b.length:a},0);

var dict = {};

function analyzePart(s) {
    if (s in dict) return dict[s];

    var sum = 0;
    
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        
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
