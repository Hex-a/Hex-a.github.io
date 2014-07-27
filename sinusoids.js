function render() {
    var canvas = document.getElementById('stage');
    var ctx = canvas.getContext('2d');
    var phase = 0;
    var k = 10;
    var p = 1;

    setInterval(function() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = "green";
        for(var a = 0; a <= 1.0; a += 0.001) {
            var angle = a * 2 * Math.PI;
            var y = 100 * Math.sin(angle);
            y += 20 * Math.sin(angle * 3);
            var x = 100 * Math.cos(angle);
            x += k * Math.sin(angle * 3 + k/10);
            ctx.fillRect(400 + x, 300 + y, 3, 3);
        }
        k += 10 * p;
        if(k===200 || k===0) p *= -1;
    }, 40);


//  setInterval(function() {
//      ctx.fillStyle = "black";
//      ctx.fillRect(0, 0, 800, 600);
//      ctx.fillStyle = "green";
//      for(var i=0; i < 800; i+=0.5) {
//          var y = 100 * Math.sin(Math.PI * 2 * (phase - i)/60);
//          y += 100 * Math.sin(Math.PI * 2 * (phase - i)/89);
//          y += 20 * Math.sin(Math.PI * 2 * (phase - i)/20);
//          ctx.fillRect(i, 300 + y, 2, 2);
//      }
//      phase += 10;
//  }, 40);
}
