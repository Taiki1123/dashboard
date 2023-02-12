// var theme ="white";
function theme_change(theme){
  if (theme == "dark"){
    var normal_c="#999"
    var visited = "#333"
    var background_c = "#000"
    var red_c = "rgb(225, 50, 50)"
    var blue_c = "rgb(110, 110, 255)"
    var today_c = "#5c212b"
    var border_c = "#FFF"
  }else if(theme == "white"){
    var normal_c="black"
    var visited = "gray"
    var background_c = "#FFF"
    var red_c = "red"
    var blue_c = "blue"
    var today_c = "#D65E72"
    var border_c = "#FFF"
  }

  document.getElementsByTagName("body")[0].style.backgroundColor = background_c
  document.getElementsByTagName("body")[0].style.color = normal_c
  var css = "a:link{color:"+normal_c+"} a:visited{color:"+visited+"}";
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(style);
  elements=document.querySelectorAll(".tempMin");
  for(i=0;i<elements.length;i++){
    elements[i].style.color = blue_c;
  }
  elements=document.querySelectorAll(".tempMax");
  for(i=0;i<elements.length;i++){
    elements[i].style.color = red_c;
  }
  elements = document.getElementsByClassName("date");
  for(i=0;i<elements.length;i++){
    if (elements[i].textContent[6]=="日"){
      elements[i].style.color=red_c
    }else if(elements[i].textContent[6]=="土"){
      elements[i].style.color=blue_c
    }
  }
  elements = document.getElementsByClassName("calendar_button")
  for(i=0;i<elements.length;i++){
    elements[i].style.backgroundColor = visited;
  }
}

// var cal = document.getElementById('calendar_main');



