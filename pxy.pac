function FindProxyForURL(url, host) { 
if (host == "music.163.com") return "PROXY http://116.228.80.186:8080;PROXY http://203.195.160.14:80;PROXY http://175.188.188.104:8080;");

return "DIRECT";
}
