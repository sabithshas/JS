var a=Math.floor(Math.random()*10+1);
// a= Math.floor(Math.random() * (10 - 1)) + 1;
console.log(a);
// var GUESS=0;
// document.getElementById("IT")
function call(){
var x=document.getElementById("IT").value
console.log(x)
if(x>a)
{
alert("guess small number")
document.getElementById('rs').innerHTML="**Guess a Small Number**";
}
else if(x<a){
alert("guess greater number")
document.getElementById('rs').innerHTML="**Guess a Greater Number**";
}
else{
   alert("guess is correct") 
   document.getElementById('rs').innerHTML="CAUGHTIT";
}
}
// function guessNumber() {
// var a=math.floor(math.random()*10+1);
// var x=document.getElementById("it").innerHTML
// if(a>x)
// {
// alert("guess greater number")
// }
// else if(a<x){
// alert("guess small number")
// }
// else{
//    alert("guess is correct") 
// }
// }

