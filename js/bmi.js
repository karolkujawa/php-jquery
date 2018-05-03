$(function(){
	$('#waga').keyup(function(){
		var waga = parseInt($(this).val());
		if(isNaN(waga)){waga == 0};
		var twaga = waga;
		
		$('#twaga').html(twaga +' kg');
	});
	
	$('#wzrost').keyup(function(){
		var wzrost = parseInt($(this).val());
		if(isNaN(wzrost)){wzrost == 0};
		var twzrost = wzrost;
		
		$('#twzrost').html(twzrost +' cm');
	});
	
	$('#wzrost' && '#waga').keyup(function(){
		var waga = parseInt($('#waga').val());
			wzrost = parseInt($('#wzrost').val());
		
		var bmi = waga/((wzrost/100)*2);
		
		$('#bmi').html(bmi.toFixed(2));
		
		if (bmi < 18.50){
			$('#write').html('Niedowaga');
		} else {
			if (bmi >= 18.50 && bmi <= 25.00 ){ 
				$('#write').html('Prawidłowa waga ciała');
			} else {
				if (bmi > 25.00 && bmi <= 30.00){
					$('#write').html('Nadwaga');
				} else {
					if (bmi > 30.00 && bmi <= 35.00){
						$('#write').html('1 stopień otyłości');
					} else {
						if (bmi > 35.00 && bmi <= 40.00){
							$('#write').html('2 stopień otyłości');
						} else {
							if(bmi > 40.00){
								$('#write').html('3 stopień otyłości');
	}}}}}}
		
	});
});