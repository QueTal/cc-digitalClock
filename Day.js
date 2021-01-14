let Day = document.getElementsByClassName("week");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function showDay(){
    const date = new Date();
    const day = date.getDay();
    const x = document.getElementById(day);
    x.style.color = "red";
    setTimeout(showDay, 1000);
}
showDay();