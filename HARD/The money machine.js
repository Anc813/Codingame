/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var rooms = [];
for (var i = 0; i < N; i++) {
    var room = readline().split(' ');
    rooms[room[0]] = {money: parseInt(room[1]), r1: room[2], r2: room[3]}
}

var paths = {};
 
function getsum(room) {
    if (room in paths) return paths[room];

    var r = rooms[room]

    var s1 = s2 = 0;
    if (r.r1 == 'E') s1 = 0; else s1 = getsum(r.r1);
    if (r.r2 == 'E') s2 = 0; else s2 = getsum(r.r2);
    
    paths[room] = r.money + Math.max(s1, s2);
    return paths[room];
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(getsum(0));
