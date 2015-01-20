/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline().toUpperCase();

var chars = [];
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';

for (var i = 0; i < H; i++) {
    var ROW = readline();
    chars.push(ROW)
}

function getChar(char, line) {
    var offset = letters.indexOf(char);
    return chars[line].substr(offset*L, L);
}

// Write an action using print()
// To debug: printErr('Debug messages...');

for(var i = 0; i < H; i++) {
    var text = T.split('').map(function(e) {
        return getChar(e, i);
    });
    print(text.join(''));
}
