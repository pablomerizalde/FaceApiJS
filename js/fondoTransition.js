var diaTiempo= 0;

function cambiarfondo(color){
$('body').css("background-image",color);
$(this).css('background-size','cover');
//document.body.style.backgroundImage = color;
   // $('body').css('background-image', 'url(js/1.jpg)');
}


function cambiar(){

    diaTiempo= (diaTiempo%5) +1;

    switch(diaTiempo){
        case 1:
            cambiarfondo("url('images/2.jpg')");
            gasto(5,5,5,5);
        break
        case 2:
            cambiarfondo("url('images/3.jpg')");
            gasto(5,5,5,5);
        break
        case 3:
            cambiarfondo("url('images/1.jpg");
            gasto(5,5,5,5);
        break
        case 4:
            cambiarfondo("url('images/4.jpg");
            gasto(5,5,5,5);
        break

    }
}


