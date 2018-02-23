var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;

var xs = 4;
var ys = 2;

var rectWidth = 100;
var rectHeight = 100;

var img = document.createElement('img');
img.width = rectWidth;
img.height = rectHeight;
img.src='point.jpg';
img.onload = function() {
    setInterval(function(){

        x+=xs;
        y+=ys;

        if(x<0 || x>canvas.width - rectWidth){
            xs*=-1;
        }

        if(y<0 || y>canvas.height - rectHeight){
            ys*=-1;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y);

    }, 1000/60);
}