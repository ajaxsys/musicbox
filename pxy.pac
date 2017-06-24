function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
if (host == "103.211.228.143" ||  host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) return (
"PROXY 1.82.216.135:80;"+
"");

return "DIRECT";
}
