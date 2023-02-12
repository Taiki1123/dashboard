var theme ="dark";

if (theme == "dark"){
    var normal_c="#999"
    var visited = "#333"
    var background_c = "#000"
    var red_c = "rgb(180, 0, 0)"
    var blue_c = "rgb(110, 110, 255)"
    var today_c = "#5c212b"
    var border_c = "#FFF"
}

document.getElementsByTagName("body")[0].style.backgroundColor = background_c
document.getElementsByTagName("body")[0].style.color = normal_c
var css = "a:link{color:"+normal_c+"} a:visited{color:"+visited+"}";
var style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);

var cal = document.getElementById('calendar_main');
document.querySelectorAll("td.disabled")
for(i=0;i<elements.length;i++){
  elements[i].style.backgroundColor = "#ff0000";
}


