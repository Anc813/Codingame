/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var seqs = [];
for (var i = 0; i < N; i++) {
    var subseq = readline();
    seqs.push(subseq);
}

var results = [];

function analyze(arr) {
    if (arr.length === 1) return results.push(arr[0].length);
    
    var total_length = arr.join('').length;
    for(var i=1; i<arr.length; i++) {
        var prev = arr[i-1];
        var curr = arr[i];
        if (~prev.indexOf(curr)) total_length -= curr.length 
        else
            for(var j=Math.max(0, prev.length - curr.length); j<prev.length; j++) {
                if (curr.indexOf(prev.slice(j)) == 0) {
                    total_length -= prev.length - j;
                    break;
                }
            }
    }
    results.push(total_length);
}

// permutations
function permutate(arr, firstpart) {
    if (!arr.length) analyze(firstpart);
    else {
        for(var i = 0; i < arr.length; i++) {
            var array = arr.slice();
            var part = array.splice(i, 1);
            permutate(array, (firstpart || []).concat(part))
        }
    }
}


permutate(seqs)

print(Math.min.apply(Math, results));

// Write an action using print()
// To debug: printErr('Debug messages...');

// permutations

//print('answer');
