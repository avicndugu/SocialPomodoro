// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1

var pomoStartMinutes=2;
var currentTimeMinutes=pomoStartMinutes;
var pomoStartSeconds=5;
var currentTimeSeconds=pomoStartSeconds;

// variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
var showPomos=document.getElementById('pomos');
// Setting up innitial display
showSeconds.textContent=pomoStartSeconds;
showMinutes.textContent=pomoStartMinutes;
// showPomos.textContent=pomoCount;


//////////// MINUTES COUNTER /////////////////////////
function minutes() {
	function delaying(){
	// checks and counts down
		 if (currentTimeSeconds>=0){
			// displaying timer seconds in the page
			showSeconds.textContent=currentTimeSeconds;
		 	console.log(currentTimeSeconds);
			currentTimeSeconds--;


		}
		else {
			// console.log(currentTimeMinutes);
			showMinutes.textContent=currentTimeMinutes;
			currentTimeMinutes--;
			currentTimeSeconds=5;
			if (currentTimeMinutes<0) {
				currentTimeMinutes=0;
				currentTimeSeconds=0;
				stopCounter();
			}
		}
	}
	secInterval=setInterval(delaying, 1000);
}
function stopCounter() {
	clearInterval(secInterval);
}
minutes();