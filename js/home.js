var img = [];
var trocar = 1;
var i = 0;
var fundo = document.getElementById('corpo');

img[0] = "../img/fundo1.jpg";
img[1] = "../img/fundo2.jpg";

setInterval( function() {
    fundo.style.backgroundImage = 'url(' + img[i] + ')';
   // fundo.style.backgroundSize = 'cover';
    if(i < 1) i = i + 1;
    else i = 0;
    
}, 5000);



