var menuText = '<table class=plain ><tr class=plain><td style=min-width:60px;><a href=../index.html class=button title=Main Menu > Home </a> </td><td style=min-width:60px;><a href=apis.html class=button title=Main Menu > What are APIs? </a> </td><td style=min-width:60px;><a href=BLSapi.html class=button title=Main Menu > What is the BLS API? </a></td><td style=min-width:60px;><a href=start.html class=button title=Main Menu > Getting Started </a></td><td style=min-width:60px;><div class=dropdown><button class=button>Request Signatures</button><div class=dropdown-content><a href=seriesID.html class=button>Series IDs</a><a href=single.html class=button>Single Series</a><a href=multiple.html class=button>Multiple Series</a><a href=parameters.html class=button>Parameters</a></div><div></td><td style=min-width:60px;><a href="responses.html" class="button" title="Main Menu" > Responses </a> </td></tr></table>';
var menuTextIndex = '<table class=plain ><tr class=plain><td style=min-width:60px;><a href="index.html" class="button" title="Main Menu" > Home </a> </td><td style=min-width:60px;><a href="content/apis.html" class="button" title="Main Menu" > What are APIs? </a> </td><td style=min-width:60px;><a href="content/BLSapi.html" class="button" title="Main Menu" > What is the BLS API? </a></td><td style=min-width:60px;><a href="content/start.html" class="button" title="Main Menu" > Getting Started </a></td><td style=min-width:60px;><div class="dropdown"><button class="button">Request Signatures</button><div class="dropdown-content"><a href=seriesID.html class=button>Series IDs</a><a href="content/single.html" class="button">Single Series</a><a href="content/multiple.html" class="button">Multiple Series</a><a href="content/parameters.html" class="button">Parameters</a></div><div></td><td style=min-width:60px;><a href="content/responses.html" class="button" title="Main Menu" > Responses </a> </td></tr></table>';	
	
//var title = document.title;
document.getElementById("nav").innerHTML = menuText;

/*
if (document.title.includes("Welcome")) {
	document.getElementById("nav").innerHTML = menuTextIndex;
}
else {
	document.getElementById("nav").innerHTML = menuText;
}*/