/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);

printErr(N, W, H);

var XMIN = 0, XMAX=W-1, YMIN=0, YMAX=H-1, X = X0, Y = Y0;
// game loop
while (true) {
    var BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    // using binary search

    if (~BOMB_DIR.indexOf('U')) YMAX=Y-1;
    if (~BOMB_DIR.indexOf('D')) YMIN=Y+1;
    if (~BOMB_DIR.indexOf('R')) XMIN=X+1;
    if (~BOMB_DIR.indexOf('L')) XMAX=X-1;

    X = (XMAX + XMIN)/2 | 0;
    Y = (YMAX + YMIN)/2 | 0;

    print(X+' '+Y); // the location of the next window Batman should jump to.
}
