var output;
var tapping = new Audio('tap.mp3');
var evaluator= new Audio('tap2.mp3');
function setinput(value){
    tapping.play();
    document.getElementById('ip1').value+=value;
    output=document.getElementById('ip1').value;
}
function clearall(){
    evaluator.play();
    document.getElementById('ip1').value='';
}
function calculate(){
    evaluator.play();
    document.getElementById('ip1').value=eval(output);
    
}
//document.getElementById('ip1').readOnly=true; 