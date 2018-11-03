// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1

var pomoStartMinutes=5;
var currentTimeMinutes=pomoStartMinutes-1;
var pomoStartSeconds=60;
var currentTimeSeconds=pomoStartSeconds-1;

// // variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
// var showPomos=document.getElementById('pomos');
	showMinutes.textContent=pomoStartMinutes;	

// // Setting up innitial display
// showSeconds.textContent=pomoStartSeconds;

// // showPomos.textContent=pomoCount;

// //////////// POMODORO COUNTER /////////////////////////
function startDisplayPomo (){
	showMinutes.textContent=pomoStartMinutes;	
	showMinutes.textContent=currentTimeMinutes;	
	// showSeconds.textContent=currentTimeSeconds;	
}
function pomodoroCounter() {
	// showMinutes.textContent=pomoStartMinutes;
	function delaying(){
// 	// checks and counts down
		 if (currentTimeSeconds>0){
// 			// displaying timer seconds in the page
		 	// console.log(currentTimeSeconds);
			showSeconds.textContent=currentTimeSeconds;
			currentTimeSeconds--;
			// showSeconds.textContent=currentTimeSeconds;			
		}
		else if (currentTimeMinutes>0) {
			// console.log(currentTimeMinutes);

			showSeconds.textContent=currentTimeSeconds;
			currentTimeMinutes--;
			showMinutes.textContent=currentTimeMinutes;
			currentTimeSeconds=59;
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

document.querySelector('#pomodoro').addEventListener('click', function(){
	pomodoroCounter();
	startDisplayPomo();
	// changeId();
});


//////////////// BREAK COUNTER////////////////////////////
function startDisplayShort (){
	
}
function shortBreakCounter() {

}

document.querySelector('#short').addEventListener('click', function(){
	shortBreakCounter();
	startDisplayShort();
	// changeId();
});


///////////////LONG BREAK COUNTER ////////////////////////////
function startDisplayLong (){
	
}
function longBreakCounter() {
	
}

document.querySelector('#long').addEventListener('click', function(){
	startDisplayLong();
	longBreakCounter();
	// changeId();
});