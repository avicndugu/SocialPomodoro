// NOTES
// bug in secondscounter when the counter reaches zero,
// there is a one second delay before restarting the counter at 60 seconds
// Set up a trigger that will start the counting
// If the counter reaches zero it sends a trigger that increments the b count by 1

var startTime=60;
var currentTimeSeconds=startTime;

// countdown in seconds
setInterval(delaying, 1000);
function delaying(){
// checks and counts down
	 if (currentTimeSeconds>0){
		currentTimeSeconds--;
		// console.log(currentTimeSeconds);
	 }
//Restarts seconds counter after reaching zero
	 else {
	 	currentTimeSeconds=startTime;
	 	minutesCounter();
	 }
}

while (currentTimeSeconds<0) {
	delaying();
}

// countdown in minutes
// if currentTime
initialMinutes=25;
currentMinutes=initialMinutes;
console.log(currentMinutes);
function minutesCounter(){
	if (currentMinutes>0){
		currentMinutes--;
		console.log(currentMinutes);
	}
}