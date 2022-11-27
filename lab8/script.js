function addElement(){
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.className = 'item';
    ul.appendChild(li);
    var element = document.querySelectorAll('li');
    Array.from(element).forEach(function(ele, i){
        ele.setAttribute("id", "" + i)
    })
    var input1 = document.createElement('input');
    input1.size = "25";
    li.appendChild(input1);

    var input2 = document.createElement('input');
    input2.size = "25";
    li.appendChild(input2);

    var upBtn = document.createElement('button');
    upBtn.textContent = "↑";
    li.appendChild(upBtn); 
    var help, idHelp, liHelp;
    upBtn.addEventListener('click', (event)=>{
        help = parseInt(li.id);
        idHelp = (help != 0) ? help - 1 + '': help + '';
        liHelp = document.getElementById(idHelp);
        li.parentNode.insertBefore(li, liHelp);
        li.id = idHelp;
        liHelp.id = help + '';
    })

    var downBtn = document.createElement('button');
    downBtn.textContent = "↓";
    li.appendChild(downBtn);
    var liClass = document.getElementsByClassName('item');
    downBtn.addEventListener('click', (event)=>{
        help = parseInt(li.id);
        idHelp = (help != liClass.length - 1) ? help + 1 + '': help + '';
        liHelp = document.getElementById(idHelp);
        li.parentNode.insertBefore(liHelp, li);
        li.id = idHelp;
        liHelp.id = help + '';
    })

    var removeBtn = document.createElement('button');
    removeBtn.textContent = "x";
    
    li.appendChild(removeBtn);
    removeBtn.addEventListener('click', (event)=>{
        help = parseInt(li.id);
        idHelp = (help != liClass.length - 1) ? help + 1 + '': help + '';
        liHelp = document.getElementById(idHelp);
        li.id = idHelp;
        liHelp.id = help + '';
        ul.removeChild(li);
    })
}

function save(){
    var liClass = document.getElementsByClassName('item');
    var text = "{";
    for(var i=0; i < liClass.length; i++){
        var input1 = liClass[i].children[0];
        var input2 = liClass[i].children[1];
        text += '"' +  input1.value + '":"' + input2.value + '"';
        text += (i != liClass.length - 1) ? "," : "}"
    }
    var p = document.getElementById('text');
    p.textContent = text;
}
