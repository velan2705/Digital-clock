let myTiming = setInterval(myClock, 1000);

function myClock(){
    let date = new Date();
    document.querySelector(".hour").innerHTML =date.getHours();
    document.querySelector(".minute").innerHTML =date.getMinutes();
    document.querySelector(".seconds").innerHTML =date.getSeconds();
    let mymonth=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let temp=0;
    for(let i=0; i<mymonth.length  ; i++){
         temp=mymonth[date.getMonth()];
        }
        console.log(temp);
        let myday=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
        let tempday=0;
    for(let i=0; i<myday.length  ; i++){
         tempday=myday[date.getDay()];
        }
        console.log(tempday);
        document.querySelector(".day").innerHTML =
    `${temp}, ${tempday} ${date.getDate()} `;

    let am=date.getHours();
if(am==0 || am<12){
    tempam="AM"
}
else{
    tempam="PM"
}

document.querySelector(".pm").innerHTML =tempam;
}
function stop(){
    clearInterval(myTiming);
}
function change(){
    
}
