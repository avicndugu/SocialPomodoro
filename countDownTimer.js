// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1
var pomo = {
	startMinutes:25,
	startSeconds:60,
	currentMinutes:24,
	currentSeconds:59
}
console.log(pomo.currentMinutes);

var shortB ={
	startMinutes:5,
	startSeconds:60,
	currentMinutes:4,
	currentSeconds:59
}
console.log(shortB.currentMinutes);

var longB = {
	startMinutes:15,
	startSeconds:59,
	currentMinutes:14,
	currentSeconds:59
}
console.log(longB.currentMinutes);

// var currentTimeMinutes=pomo.startMinutes-1;
// pomo.currentSeconds=pomo.startSeconds-1;
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
	showMinutes.textContent=pomo.currentMinutes;	
}
function pomodoroCounter() {
	function delaying(){
// 	// checks and counts down
		 if (pomo.currentSeconds>0){
// 			// displaying timer seconds in the page
			showSeconds.textContent=pomo.currentSeconds;
			pomo.currentSeconds--;
		}
		else if (pomo.currentMinutes>0) {
			showSeconds.textContent=pomo.currentSeconds;
			pomo.currentMinutes--;
			showMinutes.textContent=pomo.currentMinutes;
			pomo.currentSeconds=59;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			pomo.currentMinutes=0;
			pomo.currentSeconds=0;
			showSeconds.textContent=pomo.currentSeconds;
			console.log("Long break is over");
			// stopCounter();
			}
		}
	secInterval=setInterval(delaying, 1000);
}
var pomodoro=document.querySelector('#pomodoro');
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
pomodoro.addEventListener('click', function(){
	pomodoroCounter();
	startDisplayPomo();
	pomodoro.disabled=true; //This avoids double clicks can be number 0 or 1 or true or false.
	play.disabled=true;
	pause.disabled=true;
	short.disabled=true;
	long.disabled=true;
});


//////////////// BREAK COUNTER////////////////////////////
function startDisplayShort (){
	showMinutes.textContent=shortB.startMinutes;
	showMinutes.textContent=shortB.currentMinutes;
	showSeconds.textContent=shortB.currentSeconds;
}
function shortBreakCounter() {
	function delaying(){
	// checks and counts down
		 if (shortB.currentSeconds>0){
		// displaying timer seconds in the page
			showSeconds.textContent=shortB.currentSeconds;
			shortB.currentSeconds--;
		}
		else if (shortB.currentMinutes>0) {
			// console.log(currentTimeMinutes);

			showSeconds.textContent=shortB.currentSeconds;
			shortB.currentMinutes--;
			showMinutes.textContent=shortB.currentMinutes;
			shortB.currentSeconds=59;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			shortB.currentMinutes=0;
			shortB.currentSeconds=0;
			showSeconds.textContent=shortB.currentSeconds;
			console.log("Long break is over");
			// stopCounter();
			}
	}secInterval=setInterval(delaying, 1000);
}

short.addEventListener('click', function(){
	startDisplayShort();
	shortBreakCounter();
	// console.log('enabled');
	pomodoro.disabled=true;
	play.disabled=true;
	pause.disabled=true;
	short.disabled=true;
	long.disabled=true;
});


///////////////LONG BREAK COUNTER ////////////////////////////
function startDisplayLong (){
	showMinutes.textContent=longB.startMinutes;
	showMinutes.textContent=longB.currentMinutes;
	showSeconds.textContent=longB.currentSeconds;
}
function longBreakCounter() {
	function delaying(){
	// checks and counts down
		 if (longB.currentSeconds>0){
		// displaying timer seconds in the page
			showSeconds.textContent=longB.currentSeconds;
			longB.currentSeconds--;
		}
		else if (longB.currentMinutes>0) {
			showSeconds.textContent=longB.currentSeconds;
			longB.currentMinutes--;
			showMinutes.textContent=longB.currentMinutes;
			longB.currentSeconds=59;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			longB.currentMinutes=0;
			longB.currentSeconds=0;
			showSeconds.textContent=longB.currentSeconds;
			console.log("Long break is over");
				// stopCounter();
			}
	}secInterval=setInterval(delaying, 1000);
}

long.addEventListener('click', function(){
	startDisplayLong();
	longBreakCounter();
	pomodoro.disabled=true;
	pause.disabled=true;
	play.disabled=true;
	short.disabled=true;
	long.disabled=true;
});