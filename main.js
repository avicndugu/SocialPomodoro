// Components
// 1. Time Components
// 	a. count down timer
// 	b. display the count down timer
// 	c. button that starts and stops the timer
// 	d. the end of pomodoro triggers a break timer
// 	e. At the end of the 4 pomodoro, it triggers a longer break.
// 2. Storage
// 	a. stores the number of pomodoros tackled in the last 24 hours
// 	b. stores the number of pomodoros tackled in the last 1 week
// 	a. stores the number of pomodoros tackled in the last 24 month
// 	b. stores the number of pomodoros tackled which project.

//	1a. count down timer


// Mouse click to launch the count down







// count number of pomodoro 

//start short break


//go back to pomodoroStart again

// Check how

/////////////START OF TIMER COUNTER AND DISPLAY/////////////////////////
var pomoStartTime=10;
initialMinutes=3;
var pomoCount=0;
// var shortBreakStartTime= 10;
// var longBreakTimeStartTime= 15;

var currentTimeSeconds=pomoStartTime;
// var showSeconds=document.querySelector('p');

// variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=getElementById.document('minutes');
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



////////////////END OF TIMER COUNTER AND DISPLAY////////////////////////





































// 1	c. button that starts and stops the timer
var btnStartStop = document.getElementById('startStop');
btnStartStop.addEventListener('click',updateBtn);
function updateBtn(){
	if (btnStartStop.textContent==="Start"){
		btnStartStop.textContent="Stop";
	}
	else{
		btnStartStop.textContent="Start";
	}
}
// 1	c. button that pauses and plays the timer
var btnPausePlay= document.getElementById('pausePlay');
btnPausePlay.addEventListener('click',updateBtnPausePlay);
function updateBtnPausePlay(){
	if (btnPausePlay.textContent==="Pause"){
		btnPausePlay.textContent="Play";
	}
	else{
		btnPausePlay.textContent="Pause";
	}	
}




