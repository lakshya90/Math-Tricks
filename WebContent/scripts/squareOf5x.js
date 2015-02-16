/**
 * 
 */

function squareOf5x() {

	var number = document.getElementById("number").value;
	if(number >= 50 && number<=59 ){
	var units = number % 10;
	var tens = 5;

	var result = units * units;
	result = (25 + units) * 100 + result;
	}
	else{
		result = "Number not in range of 50-59"
	} 
		
	document.getElementById("result").value = result;

	console.log("Got the result as  " + result);

}