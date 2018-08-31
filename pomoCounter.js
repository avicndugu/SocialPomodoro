// NOTES
// bug in secondscounter when the counter reaches zero,
// there is a one second delay before restarting the counter at 60 seconds
// Set up a trigger that will start the counting
// If the counter reaches zero it sends a trigger that increments the b count by 1

var pomoStartTime=5;
var shortBreakStartTime= 10;
var longBreakTimeStartTime= 15;

var currentTimeSeconds=pomoStartTime;

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
	 	currentTimeSeconds=pomoStartTime;
	 	minutesCounter();
	 	pomoCounter();
	 }
}

while (currentTimeSeconds<0) {
	delaying();
}

// countdown in minutes
// if currentTime
initialMinutes=25;
currentMinutes=initialMinutes;
// console.log(currentMinutes);
function minutesCounter(){
	if (currentMinutes>0){
		currentMinutes--;
		// console.log(currentMinutes);
	}
}


// Pomo's counter; counts the number of pomodoro covered 
var pomoCount=0;
function pomoCounter () {
	pomoCount++;
	console.log(pomoCount);
}


// Need to have a counter for the pomodoro time and a counter for the break time
// Need to switch between pomodoro time and break time counter