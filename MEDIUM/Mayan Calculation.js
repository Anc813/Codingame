/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var H = parseInt(inputs[1]);

var numbers = [];
var numstring = '0123456789abcdefghij';

function strToNum(s) {
    var ss = '';
    for (var i=0; i<s.length/(L*H); i++)
        ss += numstring[numbers.indexOf(s.slice(i*L*H, (i+1)*(L*H)))];
    return parseInt(ss, 20);
}

function numToStr(num) {
    return num.toString(20).split('').map(function(e){
        return numbers[numstring.indexOf(e)];
    }).join('');
}

for (var i = 0; i < H; i++) {
    var numeral = readline();
    for (var j = 0; j < 20; j++) {
        numbers[j] = (numbers[j] || '') + numeral.slice(j * L, (j + 1) * L);
    }
}


var S1 = parseInt(readline());
var num1 = '';
for (var i = 0; i < S1; i++) {
    var num1Line = readline();
    num1 += num1Line;
}
num1 = strToNum(num1);


var S2 = parseInt(readline());
var num2 = '';
for (var i = 0; i < S2; i++) {
    var num2Line = readline();
    num2 += num2Line;
}
num2 = strToNum(num2);

var operation = readline();

var result;
if (operation == '+') result = num1 + num2;
if (operation == '-') result = num1 - num2;
if (operation == '*') result = num1 * num2;
if (operation == '/') result = num1 / num2;

result = numToStr(result);

for (var i = 0; i < result.length / L; i++) {
    print(result.slice(i*L, (i+1)*L));
}

// Write an action using print()
// To debug: printErr('Debug messages...');

