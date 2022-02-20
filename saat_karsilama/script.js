var name = prompt("İsminizi giriniz : ");
document.querySelector('#myName').innerHTML = name;

function showTime(){
    var now = new Date();
    let clock = document.getElementById('myClock').innerHTML = `${now}`;
    
}
setInterval(function(){showTime()});