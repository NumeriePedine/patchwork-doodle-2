var imagesArray = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];

function displayImage() {
  flip1();
  flip2();
};

$(document).ready(function () {
  for (var i = 0; i < 81; i++)
    $(".grid").append("<div class='tile' onclick='paint(this)'></div>");
});

function select(el) {
  Array.from(document.querySelectorAll('.color')).forEach(function (el) {
    el.classList.remove('selected');
  });
  el.classList.toggle("selected")
}

function paint(el) {
  var newColor
  Array.from(document.querySelectorAll('.color')).forEach(function (col) {
    if (col.classList.contains('selected')) {
      if (col.id.match('red')) { newColor = "red" }
      else if (col.id.match('blue')) { newColor = "blue" }
      else if (col.id.match('yellow')) { newColor = "yellow" }
      else if (col.id.match('green')) { newColor = "green" }
      else if (col.id.match('none')) { newColor = "" }
    }
  });
  el.id = newColor
}

function reset(el) {
  Array.from(document.querySelectorAll('.tile')).forEach(function (el) {
    el.id = "";
  });
}

var flip1 = function () {
  document.getElementById("flip").animate([
    // keyframes
    { transform: 'scaleX(100%)' },
    { transform: 'scaleX(0)' }
  ], {
    // timing options
    duration: 100,
  });
  var num = Math.floor(Math.random() * 24 + 1); // 0...6
  var rotation = Math.floor(Math.random() * 3) * 90;
  document.canvas.src = 'img/PD_carta' + num + ".png";
  document.getElementById("img").style.transform = `rotate(${rotation}deg)`;

};

function flip2() {

  document.getElementById("flip").animate([
    // keyframes
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(100%)' }
  ], {
    // timing options
    duration: 100,
  });
};
