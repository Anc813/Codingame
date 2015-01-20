/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var E = parseInt(readline()); // The level of Thor's remaining energy, representing the number of moves he can still make.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    var H,V;

    H = (LX > TX) ? 'E' : (LX < TX) ? 'W' : '';
    TX += (LX > TX) ? 1 : (LX < TX) ? -1 : 0;
    
    V = (LY > TY) ? 'S' : (LY < TY) ? 'N' : '';
    TY += (LY > TY) ? 1 : (LY < TY) ? -1 : 0;

    print(V+H); // A single line providing the move to be made: N NE E SE S SW W or NW
}
