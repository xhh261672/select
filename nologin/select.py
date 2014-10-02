import httplib
import urllib

params = urllib.urlencode({
	"select_jxbbh" : "71013530201420000",
	"select_xkkclx" : "11",
	"select_jhkcdm" : "71013530",
	})
# print params;
headers = {
	"Accecpt" : "application/json",
	"Accecpt-Encoding" : "gzip, deflate",
	"Accecpt-Language" : "zh-CN, zh;q=0.8, en; q=0.6, zh-TW; q=0.4",
	"Connection" : "keep-alive",
	"Content-Length" : "2",
	"Content-Type" : "application/json",
	"Cookie" : "JSESSIONID=0000TSWzehVq7zkHqZ5RFIrDCrC:143paqh61",
	"Host" : "xk.urp.seu.edu.cn",
	"Origin" : "http://xk.urp.seu.edu.cn",
	"Referer" : "http://xk.urp.seu.edu.cn/jw_css/xk/runMainmainSelectClassAction.action",
	"User-Agent" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36",
	"X-Request-With" : "XMLHttpRequest"
}
con = httplib.HTTPConnection("xk.urp.seu.edu.cn")
# con.request("POST", "http://xk.urp.seu.edu.cn/jw_css/xk/runSelectclassSelectionAction.action", params, headers)
con.request("GET", "http://xk.urp.seu.edu.cn/jw_css/system/showLogin.action")
res = con.getresponse()

# data = res.read()
print res.msg

con.close()