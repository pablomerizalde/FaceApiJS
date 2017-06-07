var VecRYG=[];

function updateBarra(sum, val, idBarra, min, max, narmin, narmax, rojmin, rojsup){
	/*	sum = valor a agregar
		val = valor original
		idBarra = barra a modificar
		min = valor min de la barra
		max = valor max de la barra
		narmin = cambio a color naranja min
		narmax = cambio color naranja a max
		Retorna el valor nuevo de val
	*/

/*	if(val>=max){
		if(sum<0){
			val+=sum;
			$(idBarra).css('width', val + '%');
			//$(idBarra).addClass('progress-bar-warning');
			//$(idBarra).removeClass('progress-bar-danger');
		}
	}
	else if(val==min){
		if(sum>0){
			val+=sum;
			$(idBarra).css('width', val + '%');
			//$(idBarra).addClass('progress-bar-warning');
			//$(idBarra).removeClass('progress-bar-danger');
		}
	} */
	//console.log(rojmin +" " +rojsup);
	if((val+sum)>=max){
		val = max;
		red += 25;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-warning');
		$(idBarra).removeClass('progress-bar-success');
		$(idBarra).addClass('progress-bar-danger');	
	}
	else if((val+sum)<=min){
		val = min;
		red += 25;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-warning');
		$(idBarra).removeClass('progress-bar-success');
		$(idBarra).addClass('progress-bar-danger');	

	}else{
		if((val+sum)>=narmax){
			if((val+sum)>=rojsup){
				red += 25;
				val = val+sum;
				$(idBarra).css('width', val + '%');
				$(idBarra).removeClass('progress-bar-warning');
				$(idBarra).removeClass('progress-bar-success');
				$(idBarra).addClass('progress-bar-danger');	
				
			}
			else{// if((val+sum)>=narmax){
				yellow += 25;
				val = val+sum;
				$(idBarra).css('width', val + '%');
				$(idBarra).removeClass('progress-bar-danger');
				$(idBarra).removeClass('progress-bar-success');
				$(idBarra).addClass('progress-bar-warning');
				
			}
	
		}	
		else if((val+sum)<=narmin){ 

			 if((val+sum)<=rojmin){
			 	red += 25;
				val = val+sum;
				$(idBarra).css('width', val + '%');
				$(idBarra).removeClass('progress-bar-warning');
				$(idBarra).removeClass('progress-bar-success');
				$(idBarra).addClass('progress-bar-danger');
				
			}
			else{	// if((val+sum)<=narmin){
				val = val+sum;
				yellow += 25;
				$(idBarra).css('width', val + '%');
				$(idBarra).removeClass('progress-bar-danger');
				$(idBarra).removeClass('progress-bar-success');
				$(idBarra).addClass('progress-bar-warning');
				
			}
		
		}
		else{
			val+=sum;
			green +=25;
			$(idBarra).removeClass('progress-bar-warning');
			$(idBarra).removeClass('progress-bar-danger');
			$(idBarra).addClass('progress-bar-success');
			$(idBarra).css('width', val + '%');
			
		}
		
		
	}
	return val;
}



function starBarras(){

	carb = updateBarra(0, carb, '#barr1',0,100,30,50,10,70);
	cole= updateBarra(0, cole, '#barr2',0,100,25,60,10,80);
	acid= updateBarra(0, acid, '#barr3',0,100,40,57,29,71);
	azuc = updateBarra(0, azuc, '#barr4',0,100,25,42,13,63);
}

function barraInt(){
	//$('#barr4').
}

function upBigVar(){
	VecRYG = [red,yellow,green];
	//console.log(yellow +", "+ green +", "+red);
	$("#barrV").css('width', green + '%');
	$("#barrY").css('width', yellow + '%');
	$("#barrR").css('width', red + '%');
	green = 0;
	red= 0;
	yellow =0;
}