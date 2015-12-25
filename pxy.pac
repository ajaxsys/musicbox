function FindProxyForURL(url, host) { 
if (host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.match(/.*comment.*\.163\.com.*/i)) return (
"PROXY 202.106.16.36:3128;"+
"");

return "DIRECT";
}
