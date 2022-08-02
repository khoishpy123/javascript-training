function removecolor()
{
    let y=document.querySelector('.box');
    var x=document.getElementById("colorSelect");
    x.remove(x.selecIndex);
    var newstyle = ("")
    y.setAttribute("style", "background-color: red;");
}