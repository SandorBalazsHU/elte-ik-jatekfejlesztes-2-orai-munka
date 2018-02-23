var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = document.createElement('img');
img.src='';
img.onload = function() {
    //Itt már betöltődött a kép
}

//Billentyű kezelés - Tipp lenyomott billentyűk halmaza.
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});

//Egérkezelés
document.getElementById("myBtn").addEventListener("mouseover", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);
document.getElementById("myBtn").addEventListener("mouseout", someOtherFunction);

//Fel le nyilak tiltása.
document.onkeydown(function(e){
    e.preventDefault();
})

//GameLoop
setInterval(function(){
    //Sima kép
    ctx.drawImage(img, x, y);
    //Sprite
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}, 1000/60);