// NAME : Vipul Gupta
// STUDENT ID : 8760629
//DESCRIPTION : This is a simple scientific calculator which has many functions in it for eg. sin, cos, tan, squareroot, normal arithmatic functions.

//This function is called when user use sin button to calculate.It simply returns sin value of number inputed by user. 
function sin() {
  document.calculator.result.value = Math.sin(document.calculator.result.value);
}

//This function is called when user use cos button to calculate.It simply returns cos value of number inputed by user. 
function cos() {
  document.calculator.result.value = Math.cos(document.calculator.result.value);
}

//This function is called when user use tan button to calculate.It simply returns tan value of number inputed by user. 
function tan() {
  document.calculator.result.value = Math.tan(document.calculator.result.value);
}

//This function is called when user presses the backspace button. It simply substracts the last inputed digit.
function BACKSPC() {
  var back = document.calculator.result.value;
  document.calculator.result.value = back.substr(0, back.length - 1);
}

//This function is called when user presses the square root button.It uses Math object to find square root.
function sqrt() {
  document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}

//This function is called when user presses any of button from 0-9, or use any of arithmatic operation (like +, -, *, / or %)
function number(value) {
  document.calculator.result.value += value;
}

//This function is called when user presses C button which clears the textbox.
function remv() {
  document.calculator.result.value = " ";
}

//This function is called when user presses = button.It uses Math object to calculate the equation made by user.
function equal() {
    //This if statement is specially for % function to validate if user inputs a digit and then user tries to calculate percentage of that digit.
  if (
    document.calculator.result.value.charAt(document.calculator.result.value.length - 1) == "%"
  ) {
    document.calculator.result.value = document.calculator.result.value.replace(
      "%",
      "*0.01"
    );
    document.calculator.result.value = eval(document.calculator.result.value);
  } else {
    document.calculator.result.value = eval(document.calculator.result.value);
  }
}

//This function is called when user presses Pi button and is to simply calculate PI value with the digit inputed by the user.It uses Math object for the calculation
function pi() {
  var pie = document.calculator.result.value;
  var pieStore = pie * Math.PI;
  document.calculator.result.value = pieStore;
}

//This function is Called when user presses log button and is to calculate log value of digit inputed by user.
function log() {
  document.calculator.result.value = Math.log10(document.calculator.result.value);
}

//This function is called when user presses the exp button and it simply calculates exponential using math object
function exp() {
  document.calculator.result.value = Math.exp(document.calculator.result.value);
}
