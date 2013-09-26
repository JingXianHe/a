/*
Website name:Fetchingly

Name       : JingXian He 
Description: When people click the images, it goes to the website that the image shows
Version    : 1.0
Released   : 20130925
File Name  :javaScript

*/
//when click button, it goes to the next page in left

function ccc()
{
	var a=document.getElementById('feature5');
	if(a.getAttribute("a1")=="1")
	{
		a.src='images/1.jpg';
		a.setAttribute("a1", "2");
		document.getElementById('feature6').href='http://webdesign4.georgianc.on.ca/~200238257/comp1006/profile/default.php';

	}
	else if(a.getAttribute("a1")=="2")
	{
		a.src='images/clock.jpg';
		a.setAttribute("a1", "3");
		document.getElementById('feature6').href='http://webdesign4.georgianc.on.ca/~200238257/comp1006/profile/default.php?id=18';
	}
	else
	{
		a.src='images/2.jpg';
		a.setAttribute("a1", "1");
		document.getElementById('feature6').href='https://github.com/JingXianHe/Tempeture-Station';
	}

}
//when click button, it goes to the next page in right
function ddd()
{
	var a=document.getElementById('feature5');
	if(a.getAttribute("a1")=="1")
	{
		a.src='images/1.jpg';
		a.setAttribute("a1", "3");
		document.getElementById('feature6').href='http://webdesign4.georgianc.on.ca/~200238257/comp1006/profile/default.php';

	}
	else if(a.getAttribute("a1")=="2")
	{
		a.src='images/clock.jpg';
		a.setAttribute("a1", "1");
		document.getElementById('feature6').href='http://webdesign4.georgianc.on.ca/~200238257/comp1006/profile/default.php?id=18';
	}
	else
	{
		a.src='images/2.jpg';
		a.setAttribute("a1", "2");
		document.getElementById('feature6').href='https://github.com/JingXianHe/Tempeture-Station';
	}

}

//makes the pages go from one by one automatically
function dd()
{
	var a=document.getElementById('feature5');
	a.src='images/clock.jpg';
	a.setAttribute("a1", "1");
	document.getElementById('feature6').href='https://github.com/JingXianHe/Tempeture-Station';
	setInterval("ccc()", 1000);
		
}