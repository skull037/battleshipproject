// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
// gets the container element
var gameBoardContainer = document.getElementById("gameboard");
var hitCount = 0;
//highscore variables
var highScoreNumber = 0;

//randomizes grid
randomizeGrid();

var setHighScoreNumber;
var setHighScoreName;
var setGridGen;

setHighScoreNumber  = localStorage.getItem('highScoreNumberStorage');
setHighScoreName = localStorage.getItem('highScoreNameStorage');
setHighScoreBoard = localStorage.getItem('highScoreBoardrStorage');
//hides restart button
$("#reloadButton").hide();
$("#leaderBoard").hide();

// you can use this to convert your letters into numbers for use with the 2D array
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
var gameBoard;
var playerGameBoard = [
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,1,1,1,1,0,0,0],
 				[0,0,0,0,1,1,1,1,1,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,1,1,1],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,1,1,1,1,1,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0]
 			]
var GridGen
// semirandomized 2D array to indicate where the ships are placed
function randomizeGrid(){

	GridGen = Math.floor((Math.random() * 100) + 1);
console.log("board " + GridGen);
	//Possible grid arrangements
	if (GridGen < 25){
   gameBoard = [
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,1,1,1,1,0,0,0],
 				[0,0,0,0,1,1,1,1,1,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,1,1,1],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,1,1,1,1,1,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0],
 				[0,0,0,0,0,0,0,0,0,0,0]
 			]
 		}
		else if (GridGen > 25 && GridGen < 49){
		 gameBoard = [
					 [0,0,0,1,1,1,1,1,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,1,1,1,1,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,1,1,1,1],
					 [0,0,0,0,0,0,0,1,0,0,0],
					 [0,0,0,0,1,1,0,1,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0]
				 ]
			 }
			 else if (GridGen > 49 && GridGen < 75){
				gameBoard = [
						 [0,1,1,1,1,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,1,0,0,0,0],
						 [0,0,0,0,0,0,1,0,0,0,0],
						 [0,1,0,0,0,0,1,1,0,0,0],
						 [0,1,0,0,0,0,0,1,0,0,0],
						 [0,1,0,0,0,0,0,1,0,0,0],
						 [0,1,0,0,0,0,0,0,0,0,0],
						 [0,1,0,1,1,0,0,0,0,0,0]
					 ]
				 }
 else if (GridGen > 75 && GridGen != 100){
  gameBoard = [
				[0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,1,1,1,1,1,1,1],
				[0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0]
			]
		}
		else {
		 gameBoard = [
					 [0,0,0,0,1,1,1,1,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,1,0,0,0],
					 [0,0,0,0,0,0,0,1,0,0,0],
					 [0,1,0,0,0,0,0,1,1,1,1],
					 [0,1,0,0,0,0,0,0,0,0,0],
					 [0,1,0,0,0,1,0,0,0,0,0],
					 [0,1,0,0,0,1,0,0,0,0,0],
					 [0,1,0,0,0,0,0,0,0,0,0]
				 ]
			 }
		 }
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

		$("#CoordInput").val("");
		if(gameBoardCoords == 1){

				squareToChange = 's' + letterConversion[FirstCoord] + (SecondCoord - 1);
        //so player cant hit same location again
			  gameBoard[letterConversion[FirstCoord]][SecondCoord] = 2;

				// change color to red
			  document.getElementById(squareToChange).style.backgroundColor = '#aa0000';
				highScoreNumber++;
				//(pointless) crit hits
				var critHit = Math.random();
				if(critHit > 0.91){
					//tell player they crited a ship
									$("#Alertbox").text("CRITICAL HIT");
				}
				else {
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
						document.getElementById(squareToChange).style.backgroundColor = "#f6f8f9";
						highScoreNumber++;
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
						//change screen to win state
						$("#gameboard").hide();
						$("#gameboard").hide();
						$("#FireButton").hide();
						$("#Shipbox").hide();
						$("#CoordInput").hide();
						$("#instructions").hide();
						$("#reloadButton").show();
						$("#leaderBoard").show();
						//get name for high score & display high score
            highScoreSetter();
		}
		function highScoreSetter(){
			setHighScoreNumber = localStorage.getItem('highScoreNumberStorage');
			if(setHighScoreNumber > highScoreNumber){

			var highScoreName = prompt("Please enter your name", "");

			$("#topScore").text(highScoreName + " " + highScoreNumber);

			localStorage.setItem('highScoreNameStorage', highScoreName);
			localStorage.setItem('highScoreNumberStorage', highScoreNumber);
			localStorage.setItem('highScoreBoardrStorage', GridGen);
		}
			else
			{
				$("#topScore").text(setHighScoreName + " : " + setHighScoreNumber);
			}
		}
}
