function FindProxyForURL(url, host) { 
if (host == "music.163.com") return "PROXY 113.247.233.67:3128;";

return "DIRECT";
}
