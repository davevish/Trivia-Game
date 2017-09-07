var number = 20;

var intervalId;

$("#stop").on("click", stop);
$("#resume").on("click", run);

function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$("#show-number").html("<h2>" + number + "</h2>");
	if (number === 0) {
		stop();
		alert("Time Up!");
	}
}

function stop() {
	clearInterval(intervalId);
}

run();