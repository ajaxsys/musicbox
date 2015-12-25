function FindProxyForURL(url, host) { 
if (host == "music.163.com" || url.indexOf('music.126.net')>-1 || url.indexOf('comment.news.163.com')>-1) return (
"PROXY 123.57.34.61:80;"+
"PROXY 183.239.173.138:8080;"+
"PROXY 183.239.167.122:8080;"+
"PROXY 218.213.166.218:81;"+
"PROXY 61.220.44.208:8080;"+
"PROXY 36.231.101.72:80;"+
"");

return "DIRECT";
}
