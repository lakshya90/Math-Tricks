/**
 * 
 */

function cubeRoot() {
	var number = document.getElementById("number").value;
	var units = number % 10;
	var lastDigit, result, firstDigit = 0;

	if (units === 1 || units === 4 || units === 5 || units === 6 || units === 9
			|| units === 0) {
		lastDigit = units;
	}
	if (units === 2) {
		lastDigit = units + 6;

	} else if (units === 8) {
		lastDigit = units - 6;

	} else if (units === 3) {
		lastDigit = units + 4;
	} else if (units === 7) {
		lastDigit = units - 4;
	}

	var firstHalfString = String(number).substring(0, number.length - 3);
	var firstHalf = Number(firstHalfString);

	if (firstHalf != 0) {
		if (firstHalf < 1000 && firstHalf >= 729)
			firstDigit = 9;
		else if (firstHalf >= 512)
			firstDigit = 8;
		else if (firstHalf >= 343)
			firstDigit = 7;
		else if (firstHalf >= 216)
			firstDigit = 6;
		else if (firstHalf >= 125)
			firstDigit = 5;
		else if (firstHalf >= 64)
			firstDigit = 4;
		else if (firstHalf >= 27)
			firstDigit = 3;
		else if (firstHalf >= 8)
			firstDigit = 2;
		else if (firstHalf >= 1)
			firstDigit = 1;
	}

	result = firstDigit * 10 + lastDigit;

	if (result * result * result != number) {
		result = "Not a perfect cube";

	}

	 document.getElementById("result").value = result;

	console.log("Got the result as  " + result);
}