function compute() //this function will execute by clicking 'Compute Interest' button 
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "<b>If you deposit <mark></b>" +" = " + principal + "</mark>."  + ", <br> <b>at an interest rate of  <mark></b>" + rate + " </mark>%<br> <b>You will receive an amount of  <mark></b>" + interest + " </mark> <br> <b>in the year</b>  <mark>" + yearNow + " </mark> <br> <br>";
}

// Update the current slider value (each time you drag the slider handle)
var slider = document.getElementById("rate");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value;
slider.oninput = function() 
{
output.innerHTML = this.value;
}
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
  const input1 = document.getElementById("principal");
  document.getElementById("result").innerHTML = "";
//   var resultDisplay = document.getElementById("result");
  input1.value = "";
  input2.value = "";
});
