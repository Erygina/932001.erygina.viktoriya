function one(idItemFirst,idImgFirst,idItemSecond,idImgSecond){
    var elementItemDog = document.getElementById(idItemFirst);
    elementItemDog.style.minWidth = "800px";
    var elementImgDog = document.getElementById(idImgFirst);
    elementImgDog.style.display = "block";
    elementImgDog.style.width = "560px";

    var elementItemCat = document.getElementById(idItemSecond)
    elementItemCat.style.minWidth = "40px";
    var elementImgCat = document.getElementById(idImgSecond);
    elementImgCat.style.display = "none";
}

function both(){
    var elementItem = document.getElementsByClassName('main-item-img');
    for(var i = 0; i < elementItem.length; i++){
        elementItem[i].style.minWidth = "420px";
    }

    var elementImg = document.getElementsByClassName('image-class');
    for(var i = 0; i < elementImg.length; i++){
        elementImg[i].style.display = "block";
        elementImg[i].style.width = "380px";
        elementImg[i].style.height = "330px";
    }
}