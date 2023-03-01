function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}
function clock_func(){
    var nowTime = new Date(); //  現在日時を得る
    var nowHour = set2fig(nowTime.getHours()); // 時を抜き出す
    var nowMin  = set2fig(nowTime.getMinutes()); // 分を抜き出す
    // var nowSec  = set2fig(nowTime.getSeconds()); // 秒を抜き出す
    var year = nowTime.getFullYear()
    var month = nowTime.getMonth()
    var date = nowTime.getDate()
    var dayOfWeek = nowTime.getDay() ;	// 曜日(数値)
    var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;	// 曜日(日本語表記)
    var msg = nowHour + ":" + nowMin;
    document.getElementById("clock").innerHTML = msg;
    var msg = year + "/" + month+"/"+date+"("+dayOfWeekStr+")";
    document.getElementById("day").innerHTML = msg;
  }
  clock_func()
  setInterval('clock_func()',10000);
  setInterval("wether_fetch()",60000)