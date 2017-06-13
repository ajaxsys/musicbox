function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
if (host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) return (
"PROXY 120.52.72.58:80;"+
"PROXY 220.248.229.45:3128;"+
"PROXY 120.52.21.132:8082;"+
"PROXY 120.52.72.56:80;"+
"PROXY 120.52.72.53:80;"+
"PROXY 120.52.72.54:80;"+
"PROXY 120.52.72.59:80;"+
"PROXY 120.52.72.52:80;"+
"PROXY 113.108.192.74:80;"+
"PROXY 218.205.80.12:80;"+
"PROXY 101.200.143.168:80;"+
"PROXY 218.205.80.13:80;"+
"PROXY 123.125.122.203:80;"+
"PROXY 115.159.201.179:80;"+
"PROXY 123.125.122.205:80;"+
"PROXY 120.52.72.23:80;"+
"PROXY 123.125.122.224:80;"+
"PROXY 120.52.72.21:80;"+
"");

return "DIRECT";
}
