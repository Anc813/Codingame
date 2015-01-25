/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var vs = readline().split(' ')
    .map(function(e, i, a){
        return (a[i] - a[i-1]);
    }).slice(1);

var min = 0;
var i = 0;
while (i < n) {
    if (vs[i] < 0) {
        var total = vs[i];
        var mintotal = total;
        i++;
        while (i<n && total < 0) {
            total += vs[i];
            mintotal = (mintotal > total) ? total : mintotal;
            i++;
        }
        min = (min > mintotal) ? mintotal : min;
    } else i++;
}

print(min);

// Write an action using print()
// To debug: printErr('Debug messages...');

//print('answer');
