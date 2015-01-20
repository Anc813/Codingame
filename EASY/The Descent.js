/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    var SX = parseInt(inputs[0]);
    var SY = parseInt(inputs[1]);
    
    var max_m = 0;
    var mount_n = -1;
    for (var i = 0; i < 8; i++) {
        var MH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
    
        if (MH > max_m) {
            mount_n = i;
            max_m = MH;
        }
    }
    printErr(mount_n);
    if (SX == mount_n) print ('FIRE'); else print('HOLD');

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    //print('FIRE'); // either:  FIRE (ship is firing its phase cannons) or HOLD (ship is not firing).
}
