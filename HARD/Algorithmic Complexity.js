/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var arr = [];

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var n = parseInt(inputs[0]);
    var t = parseInt(inputs[1]);

    var l = Math.log(n);

    var o1 = t;
    var ologn = t/l;
    var on = t/n;
    var onlogn = t/(n*l);
    var on2 = t/(n*n);
    var on2logn = t/(n*n*l);
    var on3 = t/(n*n*n);
    var o2n = t/(Math.pow(2, n));
    
    arr.push([o1, ologn, on, onlogn, on2, on2logn, on3, o2n]);
}

var deviations = [];
for(var i = 0; i < arr[0].length; i++) {
   var a = arr.map(function(e) {return e[i]}).sort(function(a,b){return a-b});
   // cut 5% first and 5% last values
   var a = a.slice(a.length/20|0, a.length-a.length/20|0);
   var avg = a.reduce(function(a, b) { return a + b })/a.length;
   var deviation = a.reduce(function(a, b) { return a + (Math.abs(b - avg)) })/a.length/avg;
   deviations.push(deviation);
}
printErr(deviations)
var minval = Math.min.apply( Math, deviations );
var result = ["O(1)","O(log n)","O(n)","O(n log n)","O(n^2)","O(n^2 log n)","O(n^3)","O(2^n)"];
print(result[deviations.indexOf(minval)]);
// Write an action using print()
// To debug: printErr('Debug messages...');

//print('answer');
