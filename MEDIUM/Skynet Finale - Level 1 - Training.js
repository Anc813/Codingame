/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var links = {};

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    links[N1] = (links[N1] || []).concat(N2);
    links[N2] = (links[N2] || []).concat(N1);
}

var exits = [];

for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    exits.push(EI);
}

function severlink(N1, N2) {
    links[N1].splice(links[N1].indexOf(N2), 1);
    links[N2].splice(links[N2].indexOf(N1), 1);
    print(N1+' '+N2);
}

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    // check if virus node has link to exit, if it has - cut this line
    var severed = false;
    for(var i=0; i<exits.length; i++) {
        if (~links[exits[i]].indexOf(SI)) {
            severlink(SI, exits[i]);
            severed = true;
            break;
        }
    }
    
    if (!severed) {
        // sever one of virus links
        severlink(SI, links[SI][0]);
    }
    
    // print('0 1'); // Example: 0 1 are the indices of the nodes you wish to sever the link between
}
