var colors = ["rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(0, 255, 0)",
				"rgb(0, 255, 255)",
				"rgb(0, 0, 255)",
				"rgb(255, 0, 255)"
				];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector("#message");
//console.log(pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
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

