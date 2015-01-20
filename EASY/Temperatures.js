/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // the number of temperatures to analyse
var TEMPS = readline(); // the N temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');

var mint = 5526;
if (N) TEMPS = TEMPS.split(' ').map(function(e) {return parseInt(e)});

for(var i = 0; i < N; i++) {
    mint = (Math.abs(TEMPS[i]) < Math.abs(mint)) ? TEMPS[i] : mint;
    mint = (Math.abs(TEMPS[i]) === Math.abs(mint)) ? Math.max(mint, TEMPS[i]) : mint;
}

if (N) print(mint); else print(0);
