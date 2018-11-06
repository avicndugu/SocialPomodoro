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
	startSeconds:60,
	currentMinutes:14,
	currentSeconds:59
}
console.log(longB.currentMinutes);

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
			endOfPomo();
			}
		}
	secInterval=setInterval(delaying, 1000);
	// stops delaying code from running after timer reaches 0
	function endOfPomo() {
		clearInterval(secInterval);
		console.log("End of pomo");
		console.log(pomo.startMinutes);
		// Innitialize the timer to original state
		showMinutes.textContent=pomo.startMinutes;
		pomo.currentSeconds=pomo.startSeconds;
		console.log(pomo.currentSeconds);
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
	showMinutes.textContent=shortB.startMinutes;
	showMinutes.textContent=shortB.currentMinutes;
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
			endOfShortB();
			}
	}
	secInterval=setInterval(delaying, 1000);
	// stops delaying code from running after timer reaches 0
	function endOfShortB() {
		clearInterval(secInterval);
		console.log("End of shortB");
		// Innitialize the timer to original state
		showMinutes.textContent=shortB.startMinutes;
		shortB.currentSeconds=shortB.startSeconds;
		console.log(shortB.currentSeconds);
		// Reactivate all the buttons
		pomodoro.disabled=false;
		play.disabled=false;
		pause.disabled=false;
		short.disabled=false;
		long.disabled=false;
	}
}

///////////////LONG BREAK COUNTER ////////////////////////////
function startDisplayLong (){
	showMinutes.textContent=longB.startMinutes;
	showMinutes.textContent=longB.currentMinutes;
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
			endOfLongB();
			}
	}secInterval=setInterval(delaying, 1000);
	// stops delaying code from running after timer reaches 0
	function endOfLongB() {
		clearInterval(secInterval);
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
}

/////////////CLICK EVENTS  //////////////////////////////
// Detects the click play button and starts the timer and does several things.
// Kills pomodoro button and start button 
	play.addEventListener('click', function(){
		disabler();
		pomodoroCounter();
		startDisplayPomo();
	});
	pause.addEventListener('click', function(){
		disabler();
		// pomo.currentSeconds=pomo.currentSeconds+100;
		console.log(pomo.currentSeconds);
		clearInterval(secInterval);
	});
	// Detects the click and starts the timer and does several things.
	// Kills play button and pomodoro button
	pomodoro.addEventListener('click', function(){
		pomodoroCounter();
		startDisplayPomo();
		disabler();
	});

	short.addEventListener('click', function(){
		disabler();
		startDisplayShort();
		shortBreakCounter();
		});

	long.addEventListener('click', function(){
		startDisplayLong();
		longBreakCounter();
		disabler();
	});

	reset.addEventListener('click', function(){
		//If pomodoro timer is running set
		if (showMinutes.textContent==pomo.currentMinutes){
			console.log(1);
			pomo.currentMinutes=0;
			pomo.currentSeconds=0;
			showMinutes.textContent=25;//pomo.currentMinutes;
			showSeconds.textContent=pomo.currentSeconds;
			}
			//If short break timer is running set
		if (showMinutes.textContent==shortB.currentMinutes){
			console.log(2);
			shortB.currentMinutes=0;
			shortB.currentSeconds=0;
			showMinutes.textContent=5;//shortB.currentMinutes;
			showSeconds.textContent=shortB.currentSeconds;
		}
			//If long break timer is running set
		if (showMinutes.textContent==longB.currentMinutes){
			console.log(3);
			longB.currentMinutes=0;
			longB.currentSeconds=0;
			showMinutes.textContent=15;//longB.currentMinutes;
			showSeconds.textContent=longB.currentSeconds;
		}
	});


// END OF CLICK EVENTS //////////////////////////////
/////////////NO OF POMODOROS //////////////////////////////
