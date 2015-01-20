/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = +readline().replace(',','.');
var LAT = +readline().replace(',','.');
var N = parseInt(readline());

// closest name
var cn = '';
// closest distance
var cd = 999999999999999999;
for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    var lat = +DEFIB.split(';').reverse()[0].replace(',','.');
    var lon = +DEFIB.split(';').reverse()[1].replace(',','.');
    
    var x = (lon-LON)*Math.cos((lat+LAT)/2);
    var y = lat - LAT;
    var d = Math.sqrt(x*x+y*y)*6371;
    if (d < cd) {
        cd = d;
        cn = DEFIB.split(';')[1];
    }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(cn);
