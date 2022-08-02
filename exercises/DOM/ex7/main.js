function removecolor()
{
    var y=document.querySelector('.box');
    var x=document.getElementById("colorSelect");
    x.remove(x.selecIndex);
    y.setAttribute("style", "background-color: red;");
    y.style.height = '200px';
    y.style.width = '200px';
}