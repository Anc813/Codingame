/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var exts = [], mimes = [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    exts.push(EXT);
    mimes.push(MT);
}
printErr(exts);
printErr(mimes);
var re = /(?:\.([^.]+))?$/;
for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var ext = re.exec(FNAME)[1];   // "txt"
    if (ext) {
        var index = exts.indexOf(ext.toLowerCase());
        if (~index) {
            print(mimes[index]);
        } else {
            print('UNKNOWN');
        }
    
    } else 
    print('UNKNOWN');
    }

// Write an action using print()
// To debug: printErr('Debug messages...');

// print('UNKNOWN'); // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
