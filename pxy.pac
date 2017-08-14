function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 123.103.93.38:80;"+

  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) 
  return pxyList[r]+";";

return "DIRECT";
}
