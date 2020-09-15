// A user should be able to enter 2 numbers and click on an operator.
// The result should be output on the screen.
// You should prevent dividing by zero.
// Style the calculator. (HINT: the grid system in your choice of CSS framework works really well for a calculator layout/or css grids)
// Things to think about
// a basic calculator equation has a leftHand value an operator value and a rightHand value
// for example: 4 + 4
// When writing your code make sure you have at least 1 leftHand value before letting the user click on an operator button
// Before you can click on the equal button make sure you have a leftHand value an operator value and a rightHand value or else you don't have a valid equation!
// Use innerText to get and set the text of the calculator "Screen" to show the user the equation and the result of the equation
// function render(){

// }
function run1(){

	document.case.display.value += "1"
};
function run2(){

	document.case.display.value += "2"
};
function run3(){

	document.case.display.value += "3"
};
function run4(){

	document.case.display.value += "4"
};
function run5(){

	document.case.display.value += "5"
};

function run6(){

	document.case.display.value += "6"
};

function run7(){

	document.case.display.value += "7"
};

function run8(){

	document.case.display.value += "8"
};

function run9(){

	document.case.display.value += "9"
};

function run0(){

	document.case.display.value += "0"
};
function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};

function runC(){

	document.case.display.value = ""
};

function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
