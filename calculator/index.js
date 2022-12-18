function clearScreen() {
    document.getElementById("rslt").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("rslt").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("rslt").value;
    var q = eval(p);
    document.getElementById("rslt").value = q;
}
