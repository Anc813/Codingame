/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var minX, maxX, maxY, minY;
var ys = [];
var xs = [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    ys.push(Y);
    xs.push(X);
}
var sum = Math.max.apply(Math, xs) - Math.min.apply(Math, xs);

ys.sort( function(a,b) {return a - b;} );
 
var median = ys[ys.length / 2 | 0];
sum += ys.reduce(function(p,c){return p + Math.abs(c - median);},0);
// Write an action using print()
// To debug: result('Debug messages...');

print(sum);
