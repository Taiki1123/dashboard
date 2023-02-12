
function rss_load(){
  document.querySelector(".RSS_fead").remove()
  // fetch("https://api.rss2json.com/v1/api.json?rss_url=https://news.yahoo.co.jp/rss/topics/top-picks.xml")
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://news.yahoo.co.jp/rss/topics/it.xml")
  .then((res)=>{
    return( res.json() );
  })
  .then((json)=>{
    // console.log(json["items"][0])
    var element= document.createElement("div");
    element.className="RSS_fead";
    document.getElementsByClassName("RSS")[0].appendChild(element);
    for(let i = 0; i<json["items"].length;i++){
      var rss_area = document.getElementsByClassName("RSS_fead");
      var a_element = document.createElement("a");
      a_element.href = json["items"][i]["link"];
      a_element.className="news";
      a_element.target = "_blank";
      a_element.style.textDecoration = "none";
      a_element.id ="rss"+i;
      rss_area[0].appendChild(a_element);

      var p_element = document.createElement("p");
      p_element.textContent = json["items"][i]["title"];
      document.getElementById("rss"+i).appendChild(p_element)
      // console.log(json["items"][i]["title"])
    }
  });
}
rss_load()
setInterval('rss_load()',60000);



