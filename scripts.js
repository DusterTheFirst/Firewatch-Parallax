$(document).mousemove(function(e){ 
    let middleX = $(document).width()/2;
    let middleY = $(document).height()/2;
    
    let X = e.pageX - middleX;
    let Y = e.pageY - middleY * 2;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos, xPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(Y * speed / 250);
        var xPos = -(X * speed / 250);
        layer.setAttribute('style', `transform: translate3d(${xPos}px, ${yPos}px, 0px)`);
    }
}); 