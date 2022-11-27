function addRectangle(){
    var number = document.getElementById('number').value;
    var div, randomwidth, randomX, randomY, list;
    for(var i = 0; i < number; ++i){
        div = document.createElement('div');
        div.className = "rectangle";
        randomwidth = Math.floor(Math.random() * 200);
        randomX = Math.floor(Math.random() * window.screen.width * 0.8) + 50;
        randomY = Math.floor(Math.random() * window.screen.height * 0.6) + 50;
        div.style.width = randomwidth + "px";
        div.style.height = randomwidth + "px";
        div.style.top = randomY + "px";
        div.style.left = randomX + "px";
        document.body.append(div); 
        div.addEventListener('click', (event) => { 
            event.target.style.background = "yellow";
        });
        div.addEventListener('dblclick', (event) => { 
            event.target.remove();
        });
    } 
    
}

function addTriangle(){
    var number = document.getElementById('number').value;
    var div, randomwidth, randomX, randomY;
    for(var i = 0; i < number; ++i){
        div = document.createElement('div');
        div.className = "triangle";
        randomwidth = Math.floor(Math.random() * 200);
        randomX = Math.floor(Math.random() * window.screen.width * 0.7) + 50;
        randomY = Math.floor(Math.random() * window.screen.height * 0.4) + 50;
        div.style.borderWidth = randomwidth + "px";
        div.style.borderBottomWidth = randomwidth + "px";
        div.style.top = randomY + "px";
        div.style.left = randomX + "px";
        document.body.append(div); 
        div.addEventListener('click', (event) =>{
            event.target.style.borderBottomColor = "yellow";
        })
        div.addEventListener('dblclick', (event) => { 
            event.target.remove();
        });
    }   
}

function addCicrle(){
    var number = document.getElementById('number').value;
    var div, randomwidth, randomX, randomY;
    for(var i = 0; i < number; ++i){
        div = document.createElement('div');
        div.className = "circle";
        randomwidth = Math.floor(Math.random() * 200);
        randomX = Math.floor(Math.random() * window.screen.width * 0.8) + 50;
        randomY = Math.floor(Math.random() * window.screen.height * 0.6) + 50;
        div.style.width = randomwidth + "px";
        div.style.height = randomwidth + "px";
        div.style.top = randomY + "px";
        div.style.left = randomX + "px";
        document.body.append(div); 
        div.addEventListener('click', (event) => { 
            event.target.style.background = "yellow";
        });
        div.addEventListener('dblclick', (event) => { 
            event.target.remove();
        });
    }   
}