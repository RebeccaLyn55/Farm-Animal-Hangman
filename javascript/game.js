
//Create array of words
var words=["goat","pig","duck","alpaca", "chicken", "sheep"];
var word;
var answerArray = [];
var lettersGuessed = [];
var remainingGuess;
var wins=0;


				
//Printing answerArray to screen
function printArray(){
	document.getElementById("demo").innerHTML = answerArray.join(" ");
}
	
//Printing lettersGuessed array to screen
function printGuessed(){
	console.log('printGuessed: '+lettersGuessed.length);
	document.getElementById("wrong-guess").innerHTML = 'Incorrect Letters Guessed: ' + lettersGuessed.join(", ");
}

//Printing remainingGuess array to screen
function printRemaining(){
	document.getElementById("remaining-guess").innerHTML = 'Remaining Guesses: ' + remainingGuess;
}

	
function newGame(){
	//Set Remaining Guesses to 0
	remainingGuess= 10;
	lettersGuessed = [];


	//Choosing a random word
	word = words[Math.floor(Math.random() * words.length)];
	console.log("Answer: " +word+" Length: " +word.length);
	
	//Set up answerArray
	answerArray=[];
	for (var i=0; i < word.length; i++){
		answerArray[i]="_";
	}
	console.log(answerArray);
	
	
	printArray();
	printRemaining();
}


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
	var correct=false;
	var duplicate = false;
	

		
	// Determine which key was pressed
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	for (var i = 0; i < answerArray.length; i++){
			if(answerArray[i] === userGuess){
				duplicate = true;
			}
		}
		
	for (var i = 0; i < lettersGuessed.length; i++){
			if(lettersGuessed[i] === userGuess){
				duplicate = true;
			}
		}
	
	if  (event.keyCode >= 65 && event.keyCode <=122 && duplicate === false){
		
	
		// If the user presses a key which IS in the word..
		 
		for (var i=0; i <word.length; i++){
			
			
			
			if (userGuess === word.charAt(i)){
				//Set boolean correct to true
				correct=true;
				//Letter replaces appropriate underscore
				answerArray[i]=userGuess;
			}
		}
		
		if (correct===false && duplicate === false){
			//Letter appears at bottom of screen
			lettersGuessed.push(userGuess);
			printGuessed();
		}else{
			printArray();
		}
			
		//Checks if all letters have been found - If user guesses all letters
		var win = true;
		for (var i = 0; i < answerArray.length; i++){
			if(answerArray[i] === "_"){
				win = false;
			}
		}
		
		if(win){
			wins++;
			document.getElementById("win-text").innerHTML = 'Wins: '  + wins;
			if (word==="goat"){document.getElementById("picture-wins").innerHTML = "<img src='assets/images/goat.jpg'/>";
			}else if(word==="duck"){document.getElementById("picture-wins").innerHTML= "<img src='assets/images/duck.jpg'/>";
			}else if(word==="alpaca"){document.getElementById("picture-wins").innerHTML= "<img src='assets/images/alpaca.jpg'/>";
			}else if(word==="chicken"){document.getElementById("picture-wins").innerHTML= "<img src='assets/images/chicken.jpg'/>";
			}else if(word==="pig"){document.getElementById("picture-wins").innerHTML= "<img src='assets/images/pig.jpg'/>";
			}else{document.getElementById("picture-wins").innerHTML= "<img src='assets/images/sheep.jpg'/>";
			}
			//document.getElementById("picture-wins").innerHTML="<a href='#'><img src='https://www.tellwut.com/uploads/media/image/4025e1459471569o9357.jpg' /></a>";
			document.getElementById("remaining-guess").innerHTML = " ";
			document.getElementById("wrong-guess").innerHTML = " ";
			newGame();
		}
		
		//Number of guesses decreases by 1	
		remainingGuess--;
		
		// If remaining guesses is 0 and user loses
		if (remainingGuess<0){
			console.log("You Lose");
			document.getElementById("remaining-guess").innerHTML = " ";
			document.getElementById("wrong-guess").innerHTML = " ";
			alert("Try again!");
			newGame();
		}	
		
	
		printRemaining();
		
	}		 
}

newGame();

