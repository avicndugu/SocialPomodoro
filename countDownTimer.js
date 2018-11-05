// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1
var pomo = {
	startMinutes:5
}
var pomoStartMinutes=5;
var currentTimeMinutes=pomo.startMinutes-1;
var pomoStartSeconds=10;
var currentTimeSeconds=pomoStartSeconds-1;

// // variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
// var showPomos=document.getElementById('pomos');
// // Setting up innitial display
	showMinutes.textContent=pomo.startMinutes;	
// // showPomos.textContent=pomoCount;

// //////////// POMODORO COUNTER /////////////////////////
function startDisplayPomo (){
	showMinutes.textContent=pomo.startMinutes;	
	showMinutes.textContent=currentTimeMinutes;	
}
function pomodoroCounter() {
	function delaying(){
// 	// checks and counts down
		 if (currentTimeSeconds>0){
// 			// displaying timer seconds in the page
		 	// console.log(currentTimeSeconds);
			showSeconds.textContent=currentTimeSeconds;
			currentTimeSeconds--;
		}
		else if (currentTimeMinutes>0) {
			// console.log(currentTimeMinutes);

			showSeconds.textContent=currentTimeSeconds;
			currentTimeMinutes--;
			showMinutes.textContent=currentTimeMinutes;
			currentTimeSeconds=9;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			currentTimeMinutes=0;
			currentTimeSeconds=0;
			showSeconds.textContent=currentTimeSeconds;
				// stopCounter();
			}
		}
	secInterval=setInterval(delaying, 1000);
}
var play=document.querySelector('#play');
var pause= document.querySelector('#pause');
var long=document.querySelector('#long');
var short=document.querySelector('#short');
var long=document.querySelector('#long');


// Detects the click play button and starts the timer and does several things.
// Kills pomodoro button and start button 
play.addEventListener('click', function(){
	pomodoroCounter();
	startDisplayPomo();
	pomodoro.disabled=true;
	play.disabled=true;
});
// Detects the click and starts the timer and does several things.
// Kills play button and pomodoro button
var pomodoro=document.querySelector('#pomodoro');
pomodoro.addEventListener('click', function(){
	pomodoroCounter();
	startDisplayPomo();
	pomodoro.disabled=true; //This avoids double clicks can be number 0 or 1 or true or false.
	play.disabled=true;
});


//////////////// BREAK COUNTER////////////////////////////
function startDisplayShort (){
		
}
function shortBreakCounter() {

}

short.addEventListener('click', function(){
	startDisplayShort();
	shortBreakCounter();
	// console.log('enabled');
	short.disabled=true;
});


///////////////LONG BREAK COUNTER ////////////////////////////
function startDisplayLong (){
	
}
function longBreakCounter() {
	
}

long.addEventListener('click', function(){
	startDisplayLong();
	longBreakCounter();
	long.disabled=true;
	// changeId();
});