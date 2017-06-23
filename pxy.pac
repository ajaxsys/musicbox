function FindProxyForURL(url, host) {

if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1) 
  return "DIRECT";

  
if (url.indexOf('music.163.com')>-1 || url.indexOf('music.126.net')>-1)
  return "PROXY 120.52.21.132:8082";

return "DIRECT";
}
