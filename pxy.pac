function FindProxyForURL(url, host) { 
if (host == "music.163.com") return "PROXY 139.219.14.95:9999;";

return "DIRECT";
}
