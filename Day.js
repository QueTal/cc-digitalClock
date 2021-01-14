let Day = document.getElementsByClassName("week");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function showDay(){
    const date = new Date();
    const day = date.getDay();
    const cur = document.getElementById(day);
    const prev = document.getElementById(day == 0? 6 : day-1);

    prev.style.color = "white";
    cur.style.color = "red";
    setTimeout(showDay, 1000);
}
showDay();