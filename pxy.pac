function FindProxyForURL(url, host)
{
  if (host == "music.163.com") 
    return "PROXY 111.13.12.216:80;PROXY 116.228.80.186:8080;PROXY 101.4.136.101:80;PROXY 115.239.210.199:80;PROXY 218.200.66.201:8080;";

  return "DIRECT";
}
