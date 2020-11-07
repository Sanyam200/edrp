var logdisplaystatus=0;
var regdisplaystatus=0;


function home()
{
    var a =document.getElementById("home")
    a.style= "display: true";
    logdisplaystatus=1;
    if(regdisplaystatus==1)
    {
        var b = document.getElementById("lib")
        b.style="display:none";
    }
}
function lib()
{
    var b = document.getElementById("lib")
    b.style="display: true";
    regdisplaystatus=1;
    if(logdisplaystatus==1)
    {
        var b = document.getElementById("home")
        b.style="display: none";
    }
}

function libcon()
{
    var a = document.getElementById("book")
    a.style=" display: true";
}
function digital()
{
    var a = document.getElementById("digital")
    a.style = "display : true";
}
function dues()
{
    var a = document.getElementById("dues")
    a.style = "display : true";
}
function trans()
{
    var a = document.getElementById("trans")
    a.style = "display : true";
}
function about()
{
    var a = document.getElementById("about")
    a.style = "display : true";
}
function elib()
{
    var a = document.getElementById("elib")
    a.style = "display : true";
}