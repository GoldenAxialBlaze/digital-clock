function showTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let session = "AM";
    if(hour > 12){
        hour-=12;
        session = "PM";
    }
    if(hour == 0){
        hour = 12;
    }
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let currentTime = hour + " : " + min + " : " + sec + " " + session;
    document.getElementById("clock").innerHTML = currentTime;

    setTimeout(showTime,1000);
}

showTime();