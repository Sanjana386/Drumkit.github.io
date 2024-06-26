
document.addEventListener("keypress",keySound);
for(var i=0;i<8;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}




function handleClick(){
    var butt=this.innerHTML;
    playSound(butt);
    buttonAnimation(butt);
}


function keySound(eve){
    playSound(eve.key);
    buttonAnimation(eve.key);

}


function playSound(butt){
    switch(butt){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");

    },200);
}
