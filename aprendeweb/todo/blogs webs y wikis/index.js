function layoutHandler()
	{	var styleLink = document.getElementById("estilo");
		if(window.innerWidth < 700)
		{	styleLink.setAttribute("href", "min.css");
		}
		
		else if(window.innerWidth < 1350)
		{	styleLink.setAttribute("href", "mid.css");
		}
		
		else if(window.innerWidth > 1350)
		{	styleLink.setAttribute("href", "big.css");
		}
	}

window.onresize = layoutHandler;
layoutHandler();

document.onmousedown=disableclick;
status="Right click";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}