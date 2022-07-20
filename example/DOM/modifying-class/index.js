function addClass() {
    let ele = document.getElementById('logo');
    const box = document.querySelector('div');
    console.log(box);
    console.log('ele: ', ele);
    /* thêm class*/
    //ele.classList.add('title', 'color', 'background');
    box.classList.add('changeBox');
    ele.className += ' title background';

}

function removeClass() {
    let removeELe = document.getElementById('logo');
    let removeBox = document.querySelector('div');
    removeELe = removeELe.classList.remove('title');
    removeBox = removeBox.classList.remove('changeBox');
}

function toggleClass() {
    var element = document.getElementById("logo");
    const divBox = document.querySelector('div');
    element.classList.toggle("title");
    divBox.classList.toggle("changeBox");
}

// // Select div
// const div = document.querySelector('div');
// console.log('div ', div);

// // // Apply style to div
// // // div.setAttribute('style', 'text-align: center');

// div.style.height = '200px';
// div.style.width = '200px';
// div.style.border = '2px solid black';
// div.style.textAlign = 'center';