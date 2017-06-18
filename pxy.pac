function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
if (host.indexOf('music.163.com')>-1 || url.indexOf('music.126.net')>-1 || url.indexOf('netease.com')>-1 ) 
  return "PROXY 58.154.33.12:8080";

return "DIRECT";
}
