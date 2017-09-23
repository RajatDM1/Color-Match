var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector("#message");
//console.log(pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor; 
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
colors = generateRandomColors(6);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i]; 
}

});
for(var i=0;i<squares.length;i++)
{
	console.log(pickedColor);
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor+" "+pickedColor);

		if(clickedColor == pickedColor){
			message.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else
		{
			this.style.background = "#232323";
			message.textContent = "Try Agian";
		}
	});
}

function changeColors(color)
{
	for(var i=0;i< colors.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

