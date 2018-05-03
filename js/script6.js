$(function(){
	$('#stala').keyup(function(){
		var stala = parseInt($(this).val());
		if(isNaN(stala)){stala=0;}
		
		var wynik = stala*72.5/100;
		var wynik2 = stala*77.5/100;
		var wynik3 = stala*80.5/100;
		var wynik4 = stala*82.5/100;
		var wynik5 = stala*85.5/100;
		
		$('#wynik').html(wynik+' kg');
		$('#wynik2').html(wynik2+' kg');
		$('#wynik3').html(wynik3+' kg');
		$('#wynik4').html(wynik4+' kg');
		$('#wynik5').html(wynik5+' kg');
	});
	
	$('#stala2').keyup(function(){
		var stala2 = parseInt($(this).val());
		if(isNaN(stala2)){stala2=0;}
		
		var wynika = stala2*67.5/100;
		var wynika2 = stala2*72.5/100;
		var wynika3 = stala2*75.5/100;
		var wynika4 = stala2*77.5/100;
		var wynika5 = stala2*80/100;
		
		$('#wynika').html(wynika+' kg');
		$('#wynika2').html(wynika2+' kg');
		$('#wynika3').html(wynika3+' kg');
		$('#wynika4').html(wynika4+' kg');
		$('#wynika5').html(wynika5+' kg');
	});
	
	$('#stala3').keyup(function(){
		var stala3 = parseInt($(this).val());
		if(isNaN(stala3)){stala3=0;}
		
		var wynikb = stala3*62.5/100;
		var wynikb2 = stala3*67.5/100;
		var wynikb3 = stala3*72.5/100;
		var wynikb4 = stala3*75/100;
		var wynikb5 = stala3*77.5/100;
		
		$('#wynikb').html(wynikb+' kg');
		$('#wynikb2').html(wynikb2+' kg');
		$('#wynikb3').html(wynikb3+' kg');
		$('#wynikb4').html(wynikb4+' kg');
		$('#wynikb5').html(wynikb5+' kg');
	});
	
	$('#stala4').keyup(function(){
		var stala4 = parseInt($(this).val());
		if(isNaN(stala4)){stala4=0;}
		
		var wynikc = stala4*62.5/100;
		var wynikc2 = stala4*62.5/100;
		var wynikc3 = stala4*67.5/100;
		var wynikc4 = stala4*67.5/100;
		var wynikc5 = stala4*72.5/100;
		
		$('#wynikc').html(wynikc+' kg');
		$('#wynikc2').html(wynikc2+' kg');
		$('#wynikc3').html(wynikc3+' kg');
		$('#wynikc4').html(wynikc4+' kg');
		$('#wynikc5').html(wynikc4+' kg');
	});
});
