let hr= document.getElementById('hour')
let min= document.getElementById('min')
let sec= document.getElementById('sec')


function displayTime(){
    let date = new Date();
     
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    let hrs= document.getElementById("hrs")
    let mins= document.getElementById("mins")
    let secs= document.getElementById("secs")
    
setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();



},1000)
}
setInterval(displayTime, 1000)