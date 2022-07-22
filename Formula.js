//Textbox to label conversion
//MM to M
function convert(valNum){
 document.getElementById("result1").innerHTML = valNum/1000;

}

function convert2(valNum){
    document.getElementById("result2").innerHTML = valNum/1000;
   }

//Volume of Cylinder
function Cylinder(){
    var diameter = document.getElementById("result1").innerHTML;
    var depth = document.getElementById("result2").innerHTML;
    let vol = Math.PI*(diameter/2)*(diameter/2)*depth;
    let result = vol.toExponential(5);
    document.getElementById("Volume").innerHTML = result;
}

//Calculation the Rock Destruction Efficiency
function RDE(){
    var diameter = document.getElementById("result1").innerHTML;
    var depth = document.getElementById("result2").innerHTML; 
    let out = Math.PI*(diameter/2)*(diameter/2)*depth;
    let expo = out/133.7281;
    document.getElementById("RDE").innerHTML = expo.toExponential(4);
}
