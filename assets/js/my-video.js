function pause()
{
var a = document.getElementById("pause_div").style.display = "none";
    document.getElementById("play_div").style.display = "block";

var a = document.getElementById("my-video"); 

    a.play(); 
  

}
function play()
{
var b = document.getElementById("play_div").style.display = "none";
    document.getElementById("pause_div").style.display = "block";

var a = document.getElementById("my-video"); 

    a.pause(); 

}
