const span = document.getElementsByClassName("optSpan");

function to12(event){
    console.log("to12", is24Set);
    is24Set = false;
    span[0].style.color = "red";
    span[1].style.color = "white";
}

function to24(event){
    console.log("to24", is24Set);
    is24Set = true;
    span[0].style.color = "white";
    span[1].style.color = "red";
}

span[0].addEventListener("click", to12);
span[1].addEventListener("click", to24);