// var buttonNumber = document.querySelectorAll('.drum').length;
// for (var i = 0; i < buttonNumber; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     var innerHtml = this.innerHTML; //using innerHtml
//     switch (innerHtml) {
//       case 'w':
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case 'a':
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case 's':
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case 'd':
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case 'j':
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       case 'k':
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case 'l':
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//     }
//   });
// }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// var myAudio = new Audio("sounds/crash.mp3");
// myAudio.play();
// function Audio(fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function(){
//     Tap into the audio Hardware
//     Check the file at fileLocation exits
//     Check the file at fileLocation is sound file
//     Play the file at fileLocation
//   }
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Detecting button click
var numberOfbutton = document.querySelectorAll('.drum').length;

for(let i=0; i<numberOfbutton; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

// Detecting keyboard
document.addEventListener('keypress', function(event){
  makeSound(event.key);
  switch (event.key) {
    case 'w':
    case 'a':
    case 's':
    case 'd':
    case 'j':
    case 'k':
    case 'l':
      animation(event.key);
      break;
    default: console.log(event.key);

  }
});

// for sound
function makeSound(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'j':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}

//for animation
function animation(currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){   //using setTimeout function for removing class
      activeButton.classList.remove('pressed');
    }, 100);
}
