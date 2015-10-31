function FindProxyForURL(url, host) { 
if (host == "music.163.com") return 
"PROXY 120.206.221.167:8123;"+
"PROXY 117.169.186.65:8123;"+
"PROXY 218.200.66.196:80;";

return "DIRECT";
}
