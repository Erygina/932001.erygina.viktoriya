let boolPoint = false;
function add_symbol(str){
    let input = document.getElementById('result');
    let operation = [' + ', ' * ',' / '];
    let symb = ['+', '*','/'];
    let help = input.value;
    if(input.value == "" || input.value == "0")
        if(!operation.includes(str) && str != "." && str != " - ") 
        {   
            input.value = str;
        }
        else{
            if(str=="."){
                input.value = "0"
                input.value += str;
                boolPoint = true; 
            }
            else{
                input.value = "0"
                input.value += str;
            }
        } 
    else {
        
        if(str!= "." && !operation.includes(str) && str != " - "){
            input.value += str;
        }
        else if(str=="."){
            if(boolPoint == false){
                input.value += str;
                boolPoint = true;
            }
        }
        else if(operation.includes(str) || str == " - "){
            console.log(8);
            console.log(help[help.length - 2]);
            console.log(help[help.length - 5]);
            if(symb.includes(help[help.length - 2]) && str != ' - '){
                alert("Ошибка ввода");console.log(25);
            }
            else if(help[help.length - 2] == "-" && help[help.length - 5] == "-" && (operation.includes(str) || str == " - ")){
                alert("Ошибка ввода");
            }
            else if(help[help.length - 2] == "-" && (str ==" * " || str == " / ")){
                alert("Ошибка ввода");
            }
            else if(help[help.length - 5] == "-" && help[help.length - 2] == "+" && (operation.includes(str) || str == " - ")){
                alert("Ошибка ввода");
            }
            else if(symb.includes(help[help.length - 5]) && operation.includes(str)){
                alert("Ошибка ввода");
            }
            else{
                input.value += str;
                boolPoint = false;
            }
        }
        
    }
}

function clear_text(){
    let input = document.getElementById('result');
    input.value = "";
    boolPoint = false;
}

function clear_symbol(){
    let input = document.getElementById('result');
    let str = input.value, str1;
    if(str[str.length - 1] == " "){
        str1 = str.slice(0, -3);
    }
    else{
        if(str[str.length - 1]==".")boolPoint = false;
        str1 = str.slice(0, -1);
    } 
    input.value = str1;
}

function equally(){
    let input = document.getElementById('result');
    let str = eval(input.value);
    if (str == "Infinity" || isNaN(str)) 
        input.value = "Ошибка";
    else input.value = str;
}


