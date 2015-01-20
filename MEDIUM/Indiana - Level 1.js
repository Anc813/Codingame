/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var action = [
// LEFT TOP RIGHT
// change for X (2 - err)
[2,2,2], 	// 0
[0,0,0],    // 1
[1,2,-1],   // 2
[2,0,2],  	// 3
[2,-1,0], 	// 4
[0,1,2], 	// 5
[1,2,-1], 	// 6
[2,0,0], 	// 7
[0,2,0], 	// 8
[0,0,2],	// 9
[2,-1,2],	// 10
[2,1,2], 	// 11
[2,2,0], 	// 12
[0,2,2] 	// 13
];


var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.

var lab = [];
for (var i = 0; i < H; i++) {
    var LINE = readline().split(' ').map(function(e){return parseInt(e)}); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    lab.push(LINE);
}

var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).
printErr(lab.join('\n'));
//printErr(EX);

// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];
    
    var ii = ['LEFT', 'TOP', 'RIGHT'].indexOf(POS);
    var cellN = lab[YI][XI];
    var dx = action[cellN][ii];
    var dy = (dx == 0)?1:0;
    //printErr(XI, YI, POS);
    printErr(cellN, dx, dy);
    var X = XI + dx;
    var Y = YI + dy;
    
    print(X+' '+Y);
    
    //printErr(POS);
    // Write an action using print()
    // To debug: printErr('Debug messages...');

    //print('0 0'); // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
}
