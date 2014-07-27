function mag(z) { return Math.sqrt(z.re * z.re + z.im * z.im); }

function findIfInSet (z, c, maxIterations) {
    var i = 0;
    while (i++ < maxIterations) {
        z = math.add(math.multiply(z, z), c);
        if(mag(z) > 4) {
            return i;
        }
    }
     
    return -1;
}

function render() {
    var canvas = document.getElementById('stage');
    var ctx = canvas.getContext('2d');
    var C = 512;

    var c = math.complex(-0.7, 0.27);

    for(var x = 0; x < C; ++x) for(var y = 0; y < C; ++y) {
        var nx = 0.5 * 2 * (x - C/2) / (C/2);
        var ny = 0.5 * 2 * (y - C/2 )/ (C/2);

        var i = findIfInSet(new math.complex(nx, ny), c, 256);
        ctx.fillStyle = 
            "hsl(" + (i+100) % 360 + ",100%," + 50 * (i!=-1?1:0) + "%)";
        ctx.fillRect(x, y, 2, 2);
    }
}
