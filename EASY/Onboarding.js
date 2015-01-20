/**
 * The code below will read all the game information for you.
 * On each game turn, information will be available on the standard input, you will be sent:
 * -> the total number of visible enemies
 * -> for each enemy, its name and distance from you
 * The system will wait for you to write an enemy name on the standard output.
 * Once you have designated a target:
 * -> the cannon will shoot
 * -> the enemies will move
 * -> new info will be available for you to read on the standard input.
 **/


// game loop
while (true) {
    var count = parseInt(readline()); // The number of current enemy ships within range
    var closet = '', min_dist = 1000;
    for (var i = 0; i < count; i++) {
        var inputs = readline().split(' ');
        var enemy = inputs[0]; // The name of this enemy
        var dist = parseInt(inputs[1]); // The distance to your cannon of this enemy
        if (dist <= min_dist) {
            closet = enemy;
            min_dist = dist;
        }
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(closet); // The name of the most threatening enemy (HotDroid is just one example)
}
