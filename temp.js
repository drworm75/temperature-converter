
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
// Reference to radio buttons
var buttonToCelsius = document.getElementById("to-celsius");
var buttonToFahrenheit = document.getElementById("to-fahrenheit");
// Reference to element for converted temperature
var element = document.getElementById("final-temp");


// var finalTemp = ""; Why doesn't this work?

//function that clears the temp text field
function clearField() {
	document.getElementById("starting-temp").value="";
}


//Convert Fahrenheit to Celsius
function toCelsius (originalTemp) {
	finalTemp = "";
	finalTemp += ((originalTemp - 32) * 5) / 9;
	if (finalTemp > 23) {
		document.getElementById('final-temp').setAttribute('class', 'hot');
	} else if (finalTemp < 0) {
		document.getElementById('final-temp').setAttribute('class', 'cold');
	} else {
		document.getElementById('final-temp').setAttribute('class', 'goldielocks');	
	}
	element.innerHTML = finalTemp + " &degC";
}

//Convert Celsius to Fahrenheit
function toFahrenheit (originalTemp) {
	finalTemp = "";
	finalTemp += ((originalTemp * 9) / 5) + 32;
		if (finalTemp > 90) {
		document.getElementById('final-temp').setAttribute('class', 'hot');
	} else if (finalTemp < 32) {
		document.getElementById('final-temp').setAttribute('class', 'cold');
	} else {
		document.getElementById('final-temp').setAttribute('class', 'goldielocks');
	}
	element.innerHTML = finalTemp  + " &degF";
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	var originalTemp = document.getElementById("starting-temp").value;
	originalTemp = parseInt(originalTemp);
	if (buttonToCelsius.checked) {
		toCelsius(originalTemp);
	} else {
		toFahrenheit(originalTemp);
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


