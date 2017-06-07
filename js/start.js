var carb = 50;
var cole = 50;
var acid = 50;
var azuc = 39;
var peso = 5;

var obj = [];

var  green=75;
var yellow=25;
var red=0;

function comidas()
{


	obj.push(new alimento(15,-15,-25,25,"#carne"));
	obj.push(new alimento(27,15,20,17,"#leche"));
	obj.push(new alimento(8,25,-25,3,"#huevos"));
	obj.push(new alimento(19,26,29,11,"#pollo"));
	obj.push(new alimento(35,24,-10,20,"#fritas"));
	obj.push(new alimento(15,17,-12,13,"#torta"));
	obj.push(new alimento(-18,-15,16,-10,"#pizza"));
	obj.push(new alimento(18,30,5,9,"#ensalada"));
	obj.push(new alimento(2,-10,23,-10,"#manzana"));
	obj.push(new alimento(-16,10,3,-39,"#LimonNaranja"));


}
//HOLIS

function start(){
	upBigVar();
	comidas();
	starBarras();
	cambiar();
	edad = 0;
	cumplirAños();

}

