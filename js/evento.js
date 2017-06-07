
/*var car = document.getElementsById("barr1");
var col = document.getElementsById("barr2");
var acz = document.getElementsById("barr3");
var azc = document.getElementsById("barr4");*/



function addUnidad(i){
	//console.log(obj[i]);

	if(obj[i].activo){
		obj[i].activo=false;
		$(obj[i].id).removeClass("img-selected");
	}
	else
	{
		obj[i].activo=true;
		$(obj[i].id).addClass("img-selected");
		//stack.push(obj[i]);
	}
	//console.log(obj[i].activo);
}


function alimentar(){
	if(obj.length!=0){
		for (var i = 0; i < obj.length; i++) {
			if(obj[i].activo){
				add(obj[i])
				obj[i].activo=false;
				$(obj[i].id).removeClass("img-selected");
			}
				//console.log(yellow +", "+ green +", "+red);
			if(green!=0 || red !=0 || yellow !=0){
				upBigVar();
				green = 0;
				red= 0;
				yellow =0;
			}
				
			
			//add(stack[i]);
		}
		
	}
	cambiar();
	console.log(VecRYG)
	//stack = [];
}

function add(com){
	//console.log(com);
	carb = updateBarra(com.carbohidratos, carb, '#barr1',0,100,30,50,10,70);
	cole= updateBarra(com.colesterol, cole, '#barr2',0,100,25,60,10,80);
	acid= updateBarra(com.acidez, acid, '#barr3',0,100,40,57,29,71);
	azuc = updateBarra(com.azucar, azuc, '#barr4',0,100,25,42,13,63);
}

function gasto(){
	var ca = carb*edad*peso/8;
}