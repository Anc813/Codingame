/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var R = parseInt(inputs[0]); // number of rows.
var C = parseInt(inputs[1]); // number of columns.
var A = parseInt(inputs[2]); // number of rounds between the time the alarm countdown is activated and the time the alarm goes off.


function getMap(map) {
    return map.join('\n');
}

// returns array of points
// using A* algorithm
function findPath(map, xc, yc, xt, yt) {
    
}


function analyzeMap(map) {
    // find control room
    var xc = yc = -1;
    for(var i=0; i<map.length; i++) {
        yc = map[i].indexOf('C');
        if (yc) {
            xc = i;
            break;
        }
    }
    
    if (~xc) {
        // path to C
    } else {
        // path to nearest ?
        
    }
    
    
}

var path = [];
var alarm = false;

// game loop
while (true) {
    var inputs = readline().split(' ');
    var KR = parseInt(inputs[0]); // row where Kirk is located.
    var KC = parseInt(inputs[1]); // column where Kirk is located.
    var map = [];
    for (var i = 0; i < R; i++) {
        var ROW = readline(); // C of the characters in '#.TC?' (i.e. one line of the ASCII maze).
        map.push(ROW);
         
    }
    
    if (alarm === true) {
        // go backward
    }
    
    if (map[KR][KC] === 'C') {
        alarm = true;
        
    }
    printErr(getMap(map));

    // find nearest ?
    
    // if c find - calc path
    // if path length > A open other ?
    

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print('RIGHT');
}
