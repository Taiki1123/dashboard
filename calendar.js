const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);


// 初期表示
window.onload = function () {
    showProcess(today);
};
// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}
function now(){
    showDate.setMonth(today.getMonth());
    showProcess(showDate);
}

// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var section_calendar = document.getElementsByClassName("calendar")[0];
    var year = date.getFullYear();
    var month = date.getMonth();
    section_calendar.children['header'].innerHTML = year + "/" + (month + 1);

    var calendar = createProcess(year, month);
    section_calendar.children["calendar_main"].innerHTML = calendar;
}
function calendar_color(theme){
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
    elements = document.querySelectorAll('#calendar_main tr');
    for(i=0;i<elements.length;i++){
        elements[i].style.color = normal_c;
    }
    elements=document.querySelectorAll("td:first-child");
    for(i=0;i<elements.length;i++){
        elements[i].style.color = red_c;
    }
    elements=document.querySelectorAll("td:last-child");
    for(i=0;i<elements.length;i++){
        elements[i].style.color = blue_c;
    }
    elements=document.querySelectorAll("td.disabled");
    for(i=0;i<elements.length;i++){
        elements[i].style.color = visited;
    }
    elements=document.querySelectorAll("td.today");
    elements[0].style.backgroundColor = today_c;
    elements[0].style.color = normal_c;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}