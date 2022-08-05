document.body.style.fontFamily = 'Arial, sans-serif';
   document.getElementById('nickname').innerHTML = 'Minh Khoi';
   document.getElementById('favorites').innerHTML = '22';
   document.getElementById('hometown').innerHTML = 'Da Nang';
   var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
   }

   
var myPic = document.createElement('img');
myPic.src = 'http://gotocon.com/dl/jaoo_aus2008/photos/speakers/Pamela_Fox.jpg';
document.body.appendChild(myPic);