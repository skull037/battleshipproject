// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
// gets the container element
var gameBoardContainer = document.getElementById("gameboard");
var hitCount = 0;

//hides restart button
$("#reloadButton").hide();

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
	"a": 0,
	"b": 1,
	"c": 2,
	"d": 3,
	"e": 4,
	"f": 5,
	"g": 6,
	"h": 7,
	"i": 8,
	"j": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		square.textContent = letterArray[j] + (i + 1);


		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';

	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,0,1,0,0,0],
				[0,1,0,0,0,0,0,1,1,1,1],
				[0,1,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,1,0,0,0,0,0,0],
				[0,1,0,0,1,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0]
				]

				function reloadGame() {

					location.reload();
				}

function fireTorpedo() {
		var Coords;
		var FirstCoord;
		var SecondCoord;
		var gameBoardCoords;
		var squareToChange;

// get coords inputed by player then cut them into two different vars
	  Coords = ($("#CoordInput").val());
		FirstCoord = Coords.substring(0, 1);
		SecondCoord = Coords.substring(1,3);
// checks gameboard for inputed vars
		gameBoardCoords = gameBoard[letterConversion[FirstCoord]][SecondCoord];

		if(gameBoardCoords == 1){

				squareToChange = 's' + letterConversion[FirstCoord] + (SecondCoord - 1);
        //so player cant hit same location again
			  gameBoard[letterConversion[FirstCoord]][SecondCoord] = 2;

				// change color to red
			  document.getElementById(squareToChange).style.backgroundColor = '#aa0000';
				//(pointless) crit hits
				var critHit = Math.random();
				if(critHit > 0.91){
					//tell player they crited a ship
									$("#Alertbox").text("CRITICAL HIT");
				}
				else{
					//tell player they hit a ship
									$("#Alertbox").text("hit");
				}


				//increase hit count
			  hitCount += 1;
			  $("#Shipbox").text("Places to hit:" + (17 - hitCount));
		}
		else if (gameBoardCoords == 0){
						//change color to grey

						squareToChange = 's' + letterConversion[FirstCoord] + (SecondCoord - 1);
						document.getElementById(squareToChange).style.backgroundColor = '#aaaaaa';
						//player cant miss again
						gameBoard[letterConversion[FirstCoord]][SecondCoord] = 2;
						//tell player they missed, happens sometimes
						$("#Alertbox").text("miss");
		}
		else if (gameBoardCoords == 2){
						//alert player that they already hit there
						$("#Alertbox").text("Already hit");

		}

		if (hitCount == 17){
			//alert player they won, and to stop blowing up the ocean
						$("#Alertbox").text("You sunk all enemy ships");
						$("#gameboard").hide();
						$("#gameboard").hide();
						$("#fireButton").hide();
						$("#Shipbox").hide();
						$("#reloadButton").show();
		}

}
