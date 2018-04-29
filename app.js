var clock = document.getElementById('clock');
var hexcolor = document.getElementById('hex-color');

function hexclock(){
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var secconds = time.getSeconds().toString();
    
if (hours.length < 2) {
        hours = '0' + hours;
  }
if (minutes.length < 2) {
         minutes = '0' + minutes;
     }
if (secconds.length < 2) {
        secconds = '0' + secconds;
    }
   var clockStr = hours + ' : ' + minutes +' : ' +  secconds;
    var hexcolorStr = '#' + hours + minutes + secconds;
    
    clock.textContent = clockStr;
    hexcolor.textContent = hexcolorStr;
 document.body.style.backgroundColor = hexcolorStr;
}
hexclock();
setInterval(hexclock,1000);