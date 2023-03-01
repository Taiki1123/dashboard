var weather;
const background_weather = {
    1: "#87CEEB",
    2: "#808080",
    3: "#0000FF",
    4: "#FFFFFF",
};
const background_time = {
    0: "#191970",
    1: "#191970",
    2: "#191970",
    3: "#191970",
    4: "#0000CD",
    5: "#4169E1",
    6: "#1E90FF",
    7: "#00BFFF",
    8: "#87CEEB",

};
function background_feader(){
    var nowTime = new Date();
    console.log(weather/100)
    console.log(nowTime.getHours())
    background_c = chroma.mix(background_weather[weather/100],"#87CEEB",0.5)
    // background_c = background_weather[weather/100]
    // document.getElementsByTagName("body")[0].style.background =  linear-gradient(,)
    document.getElementsByTagName("body")[0].style.backgroundColor =  background_c
    console.log(chroma(background_c).get('hsl.l'));
    if (chroma(background_c).get('hsl.l')>0.5){
        theme_change("white")
    }else{
        theme_change("dark")
    }
}
function background_feader_getWeather(weatherCode){
    weather = weatherCode;
    return weather
}
setTimeout("background_feader()",600)
setInterval('background_feader()',20000);
