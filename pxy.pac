function FindProxyForURL(url, host) {
 
debugPAC ="PAC Debug Information\n";

if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1) {
  debugPAC ="Derect mode"+url+" --- "+host+"\n";
  return "DIRECT";
}
  
if (url.indexOf('music.163.com')>-1 || url.indexOf('music.126.net')>-1 || url.indexOf('netease.com')>-1 ) {
  debugPAC ="Proxy mode"+url+" --- "+host+"\n";
  return "PROXY 58.154.33.12:8080";
}
  
debugPAC ="Normal derect mode"+url+" --- "+host+"\n";
return "DIRECT";
}
