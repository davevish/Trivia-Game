$(document).ready(function() {

	function startingScreen() {
		startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
		$(".mainSection").html(startScreen);
	}

	startingScreen();

	$("body").on("click", ".start-button", function(event){
		event.preventDefault();
		generateHTML();
		timer();
	});

	$("body").on("click", ".answer", function(event){
		selectedAnswer = $(this).text();
		if(selectedAnswer === correctAnswers[questionCounter]) {
			clearInterval(clock);
			generateWin();
		}
		else {
			clearInterval(clock);
			generateLoss();
		}
	});

	$("body").on("click", ".reset-button", function(event){
		restartgame();
	});

});

function generateTimedOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You have to be quicker than that! "+ correctAnswers[questionCounter] +"</p>";
	$(".mainSection").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Keep up the pace! Correct answer was "+ correctAnswers[questionCounter] +"</p>";
	$(".mainSection").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Crash and Burn! The correct answer was "+ correctAnswers[questionCounter] + "</p>";
	$(".mainSection").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainSection").html(gameHTML);
}

function wait() {
	if (questionCounter < 10) {
		questionCounter++;
		generateHTML();
		counter = 10;
		timer();
	}
	else {
		endScreen();
	}
}

function timer() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			generateTimedOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function endScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainSection").html(gameHTML);
}

function restartgame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 10;
	generateHTML();
	timer();
}

var startScreen;
var gameHTML;
var counter = 10;
var questionArray = ["What signals the start of a Formula One race?", "How high do Formula One car engines rev?", "How old is the youngest driver this season?", "Which of these is NOT a real F1 team?", "Ayrton Senna, the greatest racing driver in History, raced for which team?", "What is the top speed of a 2017 F1 car?", "How many G's do F1 drivers experience? (Astronaut's experience 3G's during shuttle lift off)", "What does pole position mean?", "Which of these is not a real F1 Gran Prix?", "What is Lewis Hamilton's salary per year?"];
var answerArray = [["Gun shot", "Lights out", "Hot model at the start line", "9am EST"], ["10,000 rpm", "20,000 rpm", "18,000 rpm", "8,000 rpm"], ["25", "18", "33", "21"], ["SonyRacing", "Haas", "McLaren-Honda", "Martini Racing"], ["Lamborghini", "McLaren", "Ford", "Rezvani"], ["200 mph", "150 mph", "400 mph", "230 mph"], ["2G", "3G", "5G",  "8G"], ["Start the race in first place", "You hit a pole", "Nothing", "That is a spin move"], ["Monaco GP", "Bahrain GP", "England GP", "Azerbijan GP"], ["$30 million", "$10 million", "$5 million", "$100 million"]];
var correctAnswers = ["B. Lights out", "C. 18,000 rpm", "B. 18", "A. SonyRacing", "B. McLaren", "D. 230mph", "C. 5G", "A. Start the race in first place", "C. England GP", "A. $30 million"];
var questionCounter = 0;
var selecterAnswer;
var clock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


console.log(correctTally);
console.log(incorrectTally);