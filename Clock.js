function show24Time(){
    console.log("24");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}
`;
    document.getElementById("MyClockDisplay").innerText = time;
    
    let timeOutFor24 = setTimeout(show24Time, 1000);
    if(!is24Set){
        clearTimeout(timeOutFor24);
        show12Time();
    }
}

function checkTime(i){
    return i < 10 ? '0' + i : i;
}

function show12Time(){
    console.log("12");
    const date = new Date();
    let hours = date.getHours();     hours = checkTime(hours);
    let minutes = date.getMinutes(); minutes = checkTime(minutes);
    let seconds = date.getSeconds(); seconds = checkTime(seconds);
    //const isAfternoon = "AM";
    
    if(hours > 12) {
        //isAfternoon = "PM"; 
        hours -= 12; 
    }
    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("MyClockDisplay").innerText = time;
    
    let timeOutFor12 = setTimeout(show12Time, 1000);

    if(is24Set){
        clearTimeout(timeOutFor12);
        show24Time();
    }
}

is24Set ? show24Time() : show12Time();