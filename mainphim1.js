// JavaScript Document

function khoitaocount()
{
	if(window.localStorage.getItem("count")==null)
		{
			window.localStorage.setItem("count",0);
		}
}

function khoitaocount0()
{
//	var d1 = document.getElementById("1");
			window.localStorage.setItem("count",0);
			window.open("chitietphim-Index.html","_blank");
//			window.open("chitietphim.html","_blank");
}
