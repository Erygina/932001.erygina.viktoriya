function over(id){
    var element = document.getElementById(id);
    element.style.display = "block";
    var main = document.getElementsByClassName('main');
    for(var i = 0; i < main.length; i++){
        main[i].style.opacity = "0.3";
    }    
}

function closeNew(id){
    var element = document.getElementById(id);
    element.style.display = "none";
    var main = document.getElementsByClassName('main');
    for(var i = 0; i < main.length; i++){
        main[i].style.opacity = "1";
    }  
}