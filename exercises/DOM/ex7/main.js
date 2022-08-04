function removecolor() {
    var y = document.querySelector('.box');
    var x = document.getElementById("colorSelect");
    // x.remove(x.selectedIndex); // remove selection
    // y.setAttribute("style", "background-color: 'x.value';");
    y.style.background = x.value;
    y.style.height = '200px';
    y.style.width = '200px';
    console.log(x.value);
    console.log(x.options[x.selectedIndex].text);
}