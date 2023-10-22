let cont=document.querySelector(".clock");
for(let i=1;i<=3;i++){
    let box=document.createElement("div");
box.classList.add("box");
    cont.appendChild(box);

}
function tim(){
    let clock=document.querySelectorAll('.box');
    let date=new Date();
    let hour=date.getHours(), min=date.getMinutes(), sec=date.getSeconds();
    let zone=document.querySelector('.zone');

    if(hour>12){
        zone.innerText="PM";
    }
    else{
        zone.innerText="AM";
    }
    hour= hour>12 ? hour-12 : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    clock[0].innerText=`${hour}`;
    clock[1].innerText=`${min}`;
    clock[2].innerText=`${sec}`;
    
    // console.log(date.getHours());
    // console.log(zone.textContent);

 let cont=document.getElementById('cont');
    if(clock[0].textContent>=9 && zone.textContent==='PM'){
        cont.style.backgroundImage = "url('./night.jfif')";
        cont.style.backgroundRepeat="no-repeat"
        cont.style.backgroundSize="cover"
        // console.log(clock[0]);

    }else if (date.getHours()>=12 && zone.textContent=='PM') {
        console.log(clock[0]);
        cont.style.backgroundImage = "url('./evening.jfif')";
        cont.style.backgroundRepeat="no-repeat"
        cont.style.backgroundSize="cover"
        // console.log(clock[0]);
        
    } 
    else {
        cont.style.backgroundImage = "url('./morning.jpg')";
        cont.style.backgroundRepeat="no-repeat"
        cont.style.backgroundSize="cover"
        // console.log(clock[0]);

    }
}
setInterval(tim,1000);

