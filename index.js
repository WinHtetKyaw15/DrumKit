var buttonNumber = document.querySelectorAll('.drum').length;
for(var i = 0; i < buttonNumber; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    this.style.color = "yellow"
  });
}

// var myAudio = new Audio("sounds/crash.mp3");
// myAudio.play();
