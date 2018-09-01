// NOTES
// bug in secondscounter when the counter reaches zero,
// there is a one second delay before restarting the counter at 60 seconds
// Set up a trigger that will start the counting
// If the counter reaches zero it sends a trigger that increments the b count by 1

var pomoStartTime=10;
initialMinutes=3;
var pomoCount=0;
// var shortBreakStartTime= 10;
// var longBreakTimeStartTime= 15;

var currentTimeSeconds=pomoStartTime;
// var showSeconds=document.querySelector('p');

// variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
var showPomos=document.getElementById('pomos');
// Setting up innitial display
showSeconds.textContent=pomoStartTime;
showMinutes.textContent=initialMinutes;
showPomos.textContent=pomoCount;

// countdown in seconds
function delaying(){
// checks and counts down
	 if (currentTimeSeconds>=1){
		currentTimeSeconds--;
		// console.log(currentTimeSeconds);
// displaying timer seconds in the page
		showSeconds.textContent=currentTimeSeconds;
	 }
//Restarts seconds counter after reaching zero
	 else {
	 	currentTimeSeconds=pomoStartTime;
	 	minutesCounter();
	 }
}

while (currentTimeSeconds<1) {
	delaying();
}

// countdown in minutes
// if currentTime
currentMinutes=initialMinutes;
// console.log(currentMinutes);
function minutesCounter(){
	if (currentMinutes>0){
		currentMinutes--;
		// console.log(currentMinutes);
		showMinutes.textContent=currentMinutes;
	}
	else{
		pomoCounter();
	}
}


// Pomo's counter; counts the number of pomodoro covered 
function pomoCounter () {
	pomoCount++;
	console.log(pomoCount);
	showPomos.textContent=pomoCount;
}

setInterval(delaying, 1000);


// Need to have a counter for the pomodoro time and a counter for the break time
// Need to switch between pomodoro time and break time counter