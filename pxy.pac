function FindProxyForURL(url, host) { 
if (host == "music.163.com") return 

"PROXY 203.195.162.96:8080;"+
"PROXY 203.195.162.96:80;"+
"PROXY 203.195.160.14:80;"+
"PROXY 182.140.132.103:8888;"+
"PROXY 61.92.53.208:80;"+

"";

return "DIRECT";
}
