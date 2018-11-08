// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1

var timer=0;
var paused;
var pomos=0;
var pomo = {
	startMinutes:5,
	startSeconds:10,
	currentMinutes:1,
	currentSeconds:9
}
// console.log(pomo.currentMinutes);

var shortB ={
	startMinutes:3,
	startSeconds:10,
	currentMinutes:2,
	currentSeconds:9
}
// console.log(shortB.currentMinutes);

var longB = {
	startMinutes:4,
	startSeconds:60,
	currentMinutes:3,
	currentSeconds:59
}
// console.log(longB.currentMinutes);

var pomodoro=document.querySelector('#pomodoro');
var play=document.querySelector('#play');
var pause= document.querySelector('#pause');
var long=document.querySelector('#long');
var short=document.querySelector('#short');
var reset=document.querySelector('#reset');
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
// function startDisplayPomo (){
// 	showMinutes.textContent=pomo.startMinutes;	
// 	showMinutes.textContent=pomo.currentMinutes;	
// }
function pomodoroCounter() {
	secInterval=setInterval(delaying, 1000);
	function delaying(){
	// checks and counts down
		 if (pomo.currentSeconds>0){
// 			// displaying timer seconds in the page
			showSeconds.textContent=pomo.currentSeconds;
			pomo.currentSeconds--;
		}
		else if (pomo.currentMinutes>0) {
			showSeconds.textContent=pomo.currentSeconds;
			pomo.currentMinutes--;
			showMinutes.textContent=pomo.currentMinutes;
			pomo.currentSeconds=9;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			pomo.currentMinutes=0;
			pomo.currentSeconds=0;
			showSeconds.textContent=pomo.currentSeconds;
			// NUMBER OF POMOS 
			pomos=pomos+1;
			console.log(pomos);
			endOfPomo();
			}
		}
	// stops delaying code from running after timer reaches 0
	function endOfPomo() {
		window.clearInterval(secInterval);
		console.log("End of pomo");
		// console.log(pomo.startMinutes);
		// Innitialize the timer to original state
		showMinutes.textContent=pomo.startMinutes;
		pomo.currentSeconds=pomo.startSeconds;
		// console.log(pomo.currentSeconds);
		// Reactivate all the buttons
		pomodoro.disabled=false;
		play.disabled=false;
		pause.disabled=false;
		short.disabled=false;
		long.disabled=false;
	}
}


//////////////// BREAK COUNTER////////////////////////////
function startDisplayShort (){
	// showMinutes.textContent=shortB.startMinutes;
	// showMinutes.textContent=shortB.currentMinutes;
}
function shortBreakCounter() {
	secInterval=setInterval(delaying, 1000);
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
			shortB.currentSeconds=9;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			shortB.currentMinutes=0;
			shortB.currentSeconds=0;
			showSeconds.textContent=shortB.currentSeconds;
			endOfShortB();
			}
	}	
	// stops delaying code from running after timer reaches 0
	function endOfShortB() {
		clearInterval(secInterval);
		console.log("End of shortB");
		// Innitialize the timer to original state
		showMinutes.textContent=shortB.startMinutes;
		showSeconds.textContent=shortB.startSeconds;
		console.log(shortB.startMinutes);
		console.log(shortB.startSeconds);
		// Reactivate all the buttons
		pomodoro.disabled=false;
		play.disabled=false;
		pause.disabled=false;
		short.disabled=false;
		long.disabled=false;
	}
}

///////////////LONG BREAK COUNTER ////////////////////////////

function longBreakCounter() {
	function longDelay(){
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
			longB.currentSeconds=9;
		 }
		 else{
		  	//if (currentTimeMinutes==0){
			longB.currentMinutes=0;
			longB.currentSeconds=0;
			showSeconds.textContent=longB.currentSeconds;
			endOfLongB();
			}
	}longSecInterval=setInterval(longDelay, 1000);
	// stops delaying code from running after timer reaches 0
	function endOfLongB() {
		clearInterval(longSecInterval);
		console.log("End of longB");
	// Innitialize the timer to original state
		showMinutes.textContent=longB.startMinutes;
		longB.currentSeconds=longB.startSeconds;
		console.log(longB.currentSeconds);
	// Reactivate all the buttons
		// long.disabled=false;
		pomodoro.disabled=false;
		play.disabled=false;
		pause.disabled=false;
		short.disabled=false;
		long.disabled=false;	
	}
}
/////////////////END OF LONG BREAK COUNTER////////////////////////////
function disabler() {
	pomodoro.disabled=true; //This avoids double clicks can be number 0 or 1 or true or false.
	play.disabled=true;
	// pause.disabled=true;
	short.disabled=true;
	long.disabled=true;
	// reset.disabled=true;
}

/////////////CLICK EVENTS  //////////////////////////////
// Detects the click play button and starts the timer and does several things.
// Kills pomodoro button and start button 
	play.addEventListener('click', function(){
		if (timer==1){
			// console.log(timer);
			// disabler();
			// timer=1;
			// pomodoro.currentSeconds=9;
			// pomodoro.currentMinutes=1;
			// showMinutes.textContent=pomodoro.startMinutes;
			// showMinutes.textContent=pomodoro.currentMinutes;
			pomodoroCounter();
			secInterval = setInterval(delaying, 1000);
		}
		if(timer==2){
			disabler();
			shortB.currentSeconds=9;
			shortB.currentMinutes=2;
			showMinutes.textContent=shortB.startMinutes;
			showMinutes.textContent=shortB.currentMinutes;
			shortBreakCounter();
		}
		if (timer==3){
			disabler();
			timer=3; //Trigger to identify which timer is being reset.
			longB.currentSeconds=9;
			longB.currentMinutes=3;
			showMinutes.textContent=longB.startMinutes;
			showMinutes.textContent=longB.currentMinutes;
			longBreakCounter();
		}
	});
	pause.addEventListener('click', function(){
		// disabler();
		play.disabled=false;
		pause.disabled=true;
		console.log(longB.currentSeconds);
		console.log(shortB.currentSeconds);
		if (timer==1) {
			clearInterval(secInterval);
			// paused=1;
		}
		if (timer==2) {
			clearInterval(secInterval);
		}
		if (timer==3){
			clearInterval(longSecInterval);
		}

	});
	// Detects the click and starts the timer and does several things.
	// Kills play button and pomodoro button
	pomodoro.addEventListener('click', function(){
		disabler();
		timer=1; //Trigger to identify which timer is being reset.
		pomodoro.currentSeconds=9;
		pomodoro.currentMinutes=4;
		showMinutes.textContent=pomodoro.startMinutes;
		showMinutes.textContent=pomodoro.currentMinutes;
		pomodoroCounter();
	});

	short.addEventListener('click', function(){
		disabler();
		timer=2; //Trigger to identify which timer is being reset.
		shortB.currentSeconds=9;
		shortB.currentMinutes=2;
		showMinutes.textContent=shortB.startMinutes;
		showMinutes.textContent=shortB.currentMinutes;
		shortBreakCounter();
		});

	long.addEventListener('click', function(){
		disabler();
		timer=3; //Trigger to identify which timer is being reset.
		longB.currentSeconds=9;
		longB.currentMinutes=3;
		showMinutes.textContent=longB.startMinutes;
		showMinutes.textContent=longB.currentMinutes;
		longBreakCounter();
	});

	reset.addEventListener('click', function(){
		//If pomodoro timer is running set
		if (timer==1){
			pomos=pomos;
			console.log(pomos);
			pomo.currentMinutes=0;
			pomo.currentSeconds=0;
			showMinutes.textContent=5;//pomo.currentMinutes;
			showSeconds.textContent=pomo.currentSeconds;
			}
			//If short break timer is running set
		if (timer==2){
			console.log(timer);
			shortB.currentMinutes=0;
			shortB.currentSeconds=0;
			showMinutes.textContent=3;//shortB.currentMinutes;
			showSeconds.textContent=shortB.currentSeconds;
		}
			//If long break timer is running set
		if (timer==3){
			console.log(timer);
			longB.currentMinutes=0;
			longB.currentSeconds=0;
			showMinutes.textContent=4;//longB.currentMinutes;
			showSeconds.textContent=longB.currentSeconds;
		}
	});
// END OF CLICK EVENTS //////////////////////////////


// Resuming after a pause




/////////////NO OF POMODOROS //////////////////////////////
