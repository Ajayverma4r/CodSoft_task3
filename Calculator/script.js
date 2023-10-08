function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function calculatePercentage() {
    try {
        var expression = document.getElementById("display").value;
        var result = eval(expression) / 100;
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
 
 function DEL(){
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    
 }