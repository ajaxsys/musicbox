function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1)
  return "DIRECT";
  
if (host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) return (
"PROXY 202.106.16.36:3128;"+
"");

return "DIRECT";
}
