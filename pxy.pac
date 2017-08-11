function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 183.169.128.30:80;"+
"PROXY 117.135.198.2:80;"+
"PROXY 210.38.1.131:8080;"+

  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) 
  return pxyList[r]+";";

return "DIRECT";
}
