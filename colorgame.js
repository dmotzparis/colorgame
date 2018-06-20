var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);

	// pick new random color from array
	pickedColor = pickColor();

	//change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";	

	messageDisplay.textContent = "";

	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}


// easyBtn.addEventListener("click", function(){

// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";	
// 		}
	
// });

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	// generate all new colors

	colors = generateRandomColors(numSquares);

	// pick new random color from array
	pickedColor = pickColor();

	//change color display
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";	

	messageDisplay.textContent = "";

	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

})

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares

	squares[i].addEventListener("click", function(){
	//grab color of clicked square	
	var clickedColor = this.style.background;

	//compare to clicked color

	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		reset.textContent = "Play Again?"
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		} else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		};
	})
}

function changeColors(color){
	// loopthroug all the squares
	for (var i = 0; i < squares.length; i++) {
		// cahnge the match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random =  Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []

	//return array
	for (var i = 0; i < num; i++) {
		//get random color and push in array
	arr.push(randomColor())
	}
	//return arr
	return arr;
}

function randomColor(){
// pick a red from 0 - 255
var r = Math.floor(Math.random() * 256);

// pick a green from 0 - 255
var g = Math.floor(Math.random() * 256);

// pick a blue from 0 - 255
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", "  + g + ", " + b +")";
}

