$(document).ready(function(){

    $('.container').mousemove(function(e){

        var x = e.pageX + 'px';
        var y = e.pageY + 'px';

        $('.cursor').css({'top':y, 'left':x});

    });

    var images = new Array('../img/food-1.jpg', '../img/food-2.jpg','../img/food-3.jpg','../img/food-4.jpg','../img/food-5.jpg');

    setInterval(function(){

        var random = images[Math.floor(Math.random() * images.length)];
        $('.image').css('background','url(' + random + ')');

    },2500);

});