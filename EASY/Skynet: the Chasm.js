/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var R = parseInt(readline()); // the length of the road before the gap.
var G = parseInt(readline()); // the length of the gap.
var L = parseInt(readline()); // the length of the landing platform.

// game loop
while (true) {
    var S = parseInt(readline()); // the motorbike's speed.
    var X = parseInt(readline()); // the position on the road of the motorbike.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    if (X < R && S <= G) print('SPEED')
    else if (S > G+1) print('SLOW')
    else if (X+S>=R+G && X < R) print('JUMP')
    else if (X>=R+G) print('SLOW')
    else print('WAIT');

    printErr(X,S,R,G,L);

    //print('SPEED'); // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
}
