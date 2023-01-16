
let curtain = document.querySelector(".container-image1");
curtain.addEventListener("click", () => { 
    curtain.classList.remove("raising-curtain");
    curtain.classList.add("disappear-curtain");
})

let lamp = document.querySelector(".lamp");
let light = document.querySelector(".light");
let focus = document.querySelector(".focus");

let clickCounter = 0;
lamp.addEventListener("click", ()=>{
    clickCounter++;
    if(clickCounter==1){
        light.classList.add("light-on");
        focus.style.visibility = "visible";
    }
    else{
        light.classList.remove("light-on");
        focus.style.visibility = "hidden";
        clickCounter = 0
    }
    
})

let animal = document.querySelector(".animals");

animal.addEventListener("click", ()=>{
    animal.style.top = "150px";
    if(animal.classList.contains("rabbit")){
        setTimeout(() => {
            animal.classList.remove("rabbit");
            animal.classList.add("bird");
        }, 500);
    }
    else{
        setTimeout(() => {
            animal.classList.remove("bird");
            animal.classList.add("rabbit");
        }, 500);
    }
    setTimeout(() => {
        animal.style.top = "25px";
    }, 500);
})