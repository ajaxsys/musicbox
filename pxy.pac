function FindProxyForURL(url, host) { 
if (host == "music.163.com") return 
"PROXY 203.195.162.96:80;"+
"PROXY 203.195.160.14:80;";

return "DIRECT";
}
