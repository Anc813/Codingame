/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var R = parseInt(readline());
var L = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');

function getLine(N) {
    var arr;
    if (N === 1) return arr = [R];
    else arr = getLine(N-1);
    
    var nextLine = [];
    var currentValue = arr[0];
    var counter = 1;
    for(var i=1; i<arr.length; i++) {
        if (arr[i] === currentValue) counter++;
        else {
            nextLine.push(counter, currentValue);
            counter = 1;
            currentValue = arr[i];
        }        
    }
    nextLine.push(counter, currentValue);
    return nextLine;
}

print(getLine(L).join(' '));
