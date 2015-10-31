function FindProxyForURL(url, host) { 
if (host == "music.163.com") return 

"PROXY 139.219.14.95:9999;"+
"PROXY 113.247.233.67:3128;"+
"PROXY 202.108.23.247:80;"+
"PROXY 42.159.253.166:3128;"+
"PROXY 183.250.161.227:9999;"+
"PROXY 123.56.124.91:3128;"+

"";

return "DIRECT";
}
