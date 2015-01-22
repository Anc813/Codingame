/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var numbers = {};

function recurseAdd(arr, node) {
    if (!arr.length) return;
    var num = arr.shift();
    node[num] = node[num] || {};
    recurseAdd(arr, node[num] );
}

function calcsum(node) {
    return Object.keys(node).length + 
        Object.keys(node).reduce(function(a,b){
            return a + calcsum(node[b]);
        }, 0);
}

for (var i = 0; i < N; i++) {
    var telephone = readline();
    recurseAdd(telephone.split(''), numbers);
}

// Write an action using print()
// To debug: printErr('Debug messages...');
print(calcsum(numbers)); // The number of elements (referencing a number) stored in the structure.
