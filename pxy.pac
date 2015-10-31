function FindProxyForURL(url, host) { 
if (host == "music.163.com") return "PROXY 39.158.11.223:8123;";

return "DIRECT";
}
