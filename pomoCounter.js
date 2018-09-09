// NOTES
// bug in secondscounter when the counter reaches zero,
// there is a one second delay before restarting the counter at 60 seconds
// Set up a trigger that will start the counting
// If the counter reaches zero it sends a trigger that increments the b count by 1
var pomoStartSeconds=60;
var currentTimeSeconds=pomoStartSeconds;
var pomoStartMinutes=1;
var currentTimeMinutes=pomoStartMinutes;
var pomoCount=0;

var btnStartStop = document.getElementById('startStop');
// variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
var showPomos=document.getElementById('pomos');
// Setting up innitial display
showSeconds.textContent=pomoStartSeconds;
showMinutes.textContent=pomoStartMinutes;
showPomos.textContent=pomoCount;

/////////////////////// SECONDS COUNTER/////////////////
function delaySec(){
// checks and counts down
	 if (currentTimeSeconds>1 &&  btnStartStop.textContent==="Reset"){
		currentTimeSeconds--;
// displaying timer seconds in the page
		showSeconds.textContent=currentTimeSeconds;
	 }
//Restarts seconds counter after reaching zero
	 else {
	 	currentTimeSeconds=pomoStartSeconds;
	 }
}

function starting() {
while (currentTimeSeconds<1) {
	delaySec();
}
}
////////////END OF SECONDS COUNTER////////////////////

//////////// MINUTES COUNTER /////////////////////////
function delayMinute() {
// checks and counts down
	 if (currentTimeMinutes>=1){
		currentTimeMinutes--;
// displaying timer MINUTES in the page
		showMinutes.textContent=currentTimeMinutes;
	 }
	 else {
	 	pomoCounter();
	 }
}

while (currentTimeMinutes<1) {
	delayMinute();
}
/////////////// END OF MINUTES COUNTER ////////////////////////////


//////////////// POMO'S COUNTER: counts the number of pomodoro covered 
function pomoCounter () {
	pomoCount++;
	console.log(pomoCount);
	showPomos.textContent=pomoCount;
}
////////////////END OF POMO'S COUNTER ////////////////////////

////////////SETTING THE INTERVAL//////////////////////

var secInterval =setInterval(delaySec, 1000);
var minInterval =setInterval(delayMinute,60000);
////////////END OF SETTTING THE INTERVAL////////////////


///////////////STOP  COUNTER//////////////////////
function stopCounter() {
	clearInterval(minInterval);
	clearInterval(secInterval);
}


////////////END OF STOP COUNTER///////////////////////


// Need to have a counter for the pomodoro time and a counter for the break time
// Need to switch between pomodoro time and break time counter

///////////////////////////////START OF TIMER BUTTONS//////////////////////////////////

// 1	c. button that starts and stops the timer
//var btnStartStop = document.getElementById('startStop');
btnStartStop.addEventListener('click',updateBtn);
function updateBtn(){
	if (btnStartStop.textContent==="Reset"){
//UPDATES THE BUTTON TEXT ON CLICK
		btnStartStop.textContent="Start";
// STOPS THE SECONDS COUNTER
		
	}

	else {
// STARTS THE SECONDS COUNTER
		
// UPDATES START BUTTON TEXT ON CLICK
		btnStartStop.textContent="Reset";

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
		stopCounter();
	}	
}

////////////////////////////END OF TIMER BUTTONS////////////////////////

