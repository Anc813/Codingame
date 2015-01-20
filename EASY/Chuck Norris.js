/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
printErr(MESSAGE);
var prev='';
var result = '';
for(var i=0; i<MESSAGE.length; i++) {
    var code = ('000000'+MESSAGE.charCodeAt(i).toString(2)).slice(-7);
    printErr(code);
    for(var j=0; j<code.length; j++) {
        var char = code.charAt(j);   
        if (char === prev) {
            result += '0';
        } else {
            result += ' ' + ((char==='0')?'00':'0') + ' 0';
        }
        prev = char;
    }
}


print(result.trim());
