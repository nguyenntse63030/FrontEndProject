// JavaScript Document
function stoptrailer()
{
	var video = document.getElementById('videotrailer');
	video.addEventListener('click',function(){
												if(video.paused)
												{
													video.play();
												}
												else
												{
													video.pause();
												}
											 });
}

function playtrailer0()
{
	var play = document.getElementById("videotrailer");
	play.src="project/trailer.mp4";
}

function playtrailer1()
{
	var play = document.getElementById("videotrailer");
	play.src="project/Avengers2Trailer.mkv";
}

function playtrailer2()
{
	var play = document.getElementById("videotrailer");
	play.src="project/CaptainAmerica2Trailer.mkv";
}

function playtrailer3()
{
	var play = document.getElementById("videotrailer");
	play.src="project/TheAmazingSpiderMan2Trailer.mkv";
}

function playtrailer4()
{
	var play = document.getElementById("videotrailer");
	play.src="project/FantasticFourOfficialTrailer.mkv";
}

function playtrailer5()
{
	var play = document.getElementById("videotrailer");
	play.src="project/ManofSteelOfficialTrailer3.mkv";
}
function demo(){
		if(window.pageYOffset>200)
			{
				document.getElementById("len").style.visibility="visible";
			}
		else{
			document.getElementById("len").style.visibility="hidden";
		}
	}
	var y;
	var id;
	function truot()
	{
		y=window.pageYOffset;
		y=y-100;
		window.scrollTo(0,y);
		if(y<=0)
			window.clearTimeout(id);
		
		
	}
	function test(){
		id=window.setInterval(truot,20);
		id.style.transition="all 0.5s";
	}


