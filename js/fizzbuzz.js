function show(n){
	$('.lead').append("<br /> ::: Show FizzBuzz values :::");

	var value = "";
	for(i=1; i<=n; i++){
		value = i;

		if((i % 3) == 0) value = "Fizz";
		else if((i % 5) == 0) value = "Buzz";

		if(((i % 3) == 0) && ((i % 5) == 0)) value = "FizzBuzz";
		


		$('.lead').append("<br />"+value+"");
	}
};

show(20);