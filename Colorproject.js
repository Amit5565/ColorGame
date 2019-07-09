var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickcolor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modebuttons = document.querySelectorAll(".mode");
// var easybtn=document.querySelector("#easy");
// var hardbtn=document.querySelector("#hard");
for (var i = 0; i < modebuttons.length; i++) {
  modebuttons[i].addEventListener("click", function() {
    modebuttons[0].classList.remove("selected");
    modebuttons[1].classList.remove("selected");
    this.classList.add("selected");
    // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    if(this.textContent === "Hard")
    {
      numSquares=6;


    }
    else{
      numSquares=3;
    }
    reset();

    //figure out how many squares to show
    //pick new Colors
    //pick a new pickedColor
    //update page to reflect changes

  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickcolor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change color of squares
  for (var i = 0; i < squares.length; i++){
    if (colors[i]) {
      squares[i].style.display="block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display="none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}
// easybtn.addEventListener("click", function() {
//   easybtn.classList.add("selected");
//   hardbtn.classList.remove("selected");
//   numSquares=3;
//   colors=generateRandomColors(numSquares);
//   pickedColor=pickcolor();
//   colorDisplay.textContent=pickedColor;
//   for(var i=0;i<squares.length;i++)
//   {
//     if(colors[i])
//     {
//       squares[i].style.backgroundColor=colors[i];
//     }
//     else{
//       squares[i].style.display="none";
//     }
//   }
//
// })
// hardbtn.addEventListener("click", function() {
//   hardbtn.classList.add("selected");
//   easybtn.classList.remove("selected");
//   numSquares=6;
//   colors=generateRandomColors(numSquares);
//   pickedColor=pickcolor();
//   colorDisplay.textContent=pickedColor;
//   for(var i=0;i<squares.length;i++)
//   {
//       squares[i].style.display="block";
//       squares[i].style.backgroundColor=colors[i];
//   }
// })
//


resetButton.addEventListener("click", function() {
  // //generate all new Colors
  // colors = generateRandomColors(numSquares);
  // //pick a new random color from array
  // this.textContent = "New Colors";
  // pickedColor = pickcolor();
  // //change colorDisplay to match picked color
  // colorDisplay.textContent = pickedColor;
  // //change color of squares
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
  // messageDisplay.textContent = "";
  reset();
});



for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor !== pickedColor) {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    } else {
      messageDisplay.textContent = "Correct";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again";

    }
  });
}
colorDisplay.textContent = pickedColor;

function changeColor(color) {
  //loop through all the colors to change them to Correct color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {

  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());

  }

  return arr;
}

function randomColor() {
  //pick a "red" form 0-255"
  var r = Math.floor(Math.random() * 256);
  //pick a "green" form 0-255"
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" form 0-255"
  var b = Math.floor(Math.random() * 256);
  //"rgb(r, g, b)"

  return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}
