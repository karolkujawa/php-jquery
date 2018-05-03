$(function(){
	$('#stala').keyup(function(){
		var stala = parseInt($(this).val());
		if(isNaN(stala)){stala=0};
		
		var wynik = stala*55/100;
		var wynik2 = stala*55/100;
		var wynik3 = stala*60/100;
		var wynik4 = stala*60/100;
		var wynik5 = stala*65/100;
		
		$('#wynik').html(wynik+' kg');
		$('#wynik2').html(wynik2+' kg');
		$('#wynik3').html(wynik3+' kg');
		$('#wynik4').html(wynik4+' kg');
		$('#wynik5').html(wynik5+' kg');
	});
	
	$('#stala2').keyup(function(){
		var stala2 = parseInt($(this).val());
		if(isNaN(stala2)){stala2=0};
		
		var wynika = stala2*52.5/100;
		var wynika2 = stala2*52.5/100;
		var wynika3 = stala2*56.5/100;
		var wynika4 = stala2*56.5/100;
		
		$('#wynika').html(wynika+' kg');
		$('#wynika2').html(wynika2+' kg');
		$('#wynika3').html(wynika3+' kg');
		$('#wynika4').html(wynika4+' kg');
	});
	
	$('#stala3').keyup(function(){
		var stala3 = parseInt($(this).val());
		if(isNaN(stala3)){stala3=0};
		
		var wynikb = stala3*55/100;
		var wynikb2 = stala3*55/100;
		var wynikb3 = stala3*60/100;
		var wynikb4 = stala3*60/100;
		var wynikb5 = stala3*65/100;
		
		$('#wynikb').html(wynikb+' kg');
		$('#wynikb2').html(wynikb2+' kg');
		$('#wynikb3').html(wynikb3+' kg');
		$('#wynikb4').html(wynikb4+' kg');
		$('#wynikb5').html(wynikb5+' kg');
	});
	
	$('#stala4').keyup(function(){
		var stala4 = parseInt($(this).val());
		if(isNaN(stala4)){stala4=0};
		
		var wynikc = stala4*52.5/100;
		var wynikc2 = stala4*52.5/100;
		var wynikc3 = stala4*56.5/100;
		var wynikc4 = stala4*56.5/100;
		
		$('#wynikc').html(wynikc+' kg');
		$('#wynikc2').html(wynikc2+' kg');
		$('#wynikc3').html(wynikc3+' kg');
		$('#wynikc4').html(wynikc4+' kg');
	});
	
	$('#stala5').keyup(function(){
		var stala5 = parseInt($(this).val());
		if(isNaN(stala5)){stala5=0};
		
		var wynikd = stala5*52.5/100;
		var wynikd2 = stala5*52.5/100;
		var wynikd3 = stala5*56.5/100;
		var wynikd4 = stala5*56.5/100;
		
		$('#wynikd').html(wynikd+' kg');
		$('#wynikd2').html(wynikd2+' kg');
		$('#wynikd3').html(wynikd3+' kg');
		$('#wynikd4').html(wynikd4+' kg');
	});
	
	$('#stala6').keyup(function(){
		var stala6 = parseInt($(this).val());
		if(isNaN(stala6)){stala6=0};
		
		var wynike = stala6*60/100;
		var wynike2 = stala6*60/100;
		var wynike3 = stala6*65/100;
		var wynike4 = stala6*65/100;
		var wynike5 = stala6*70/100;
		
		$('#wynike').html(wynike+' kg');
		$('#wynike2').html(wynike2+' kg');
		$('#wynike3').html(wynike3+' kg');
		$('#wynike4').html(wynike4+' kg');
		$('#wynike5').html(wynike5+' kg');	
	});
});
