/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var horses = [];
for (var i = 0; i < N; i++) {
    var Pi = parseInt(readline());
    horses.push(Pi);
}

horses.sort(function(a,b){return a-b});

var min = horses[1] - horses[0];
for(var i=1; i<horses.length; i++){
    var dif = horses[i] - horses[i-1]
    min = (dif < min) ? dif : min; 
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(min);
