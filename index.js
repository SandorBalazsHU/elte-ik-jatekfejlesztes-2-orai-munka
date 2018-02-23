var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;

var xs = 5;
var ys = 5;

var rectWidth = 100;
var rectHeight = 100;

var img = document.createElement('img');
img.width = rectWidth;
img.height = rectHeight;
img.src='point.jpg';
img.onload = function() {
    setInterval(function(){

        //Billentyűkezelés
        if (Key.isDown(Key.UP)) y-=ys;
        if (Key.isDown(Key.LEFT)) x-=xs; 
        if (Key.isDown(Key.DOWN)) y+=ys;
        if (Key.isDown(Key.RIGHT)) x+=xs;

        if (Key.isDown(Key.W)) y-=ys;
        if (Key.isDown(Key.A)) x-=xs; 
        if (Key.isDown(Key.S)) y+=ys;
        if (Key.isDown(Key.D)) x+=xs;

        //Rajzolás
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y);

    }, 1000/60);
}

var Key = {
    _pressed: {},

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,

    isDown: function(keyCode) {
        return this._pressed[keyCode];
    },

    onKeydown: function(event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyup: function(event) {
        delete this._pressed[event.keyCode];
    }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);