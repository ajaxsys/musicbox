function FindProxyForURL(url, host) {if (isInNet(host, dnsResolve("music.163.com"), "255.255.255.255")){return "PROXY :123.57.215.44:32794";}return "DIRECT";}
