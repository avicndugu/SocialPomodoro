// Countdown fron 25 minutes to zero
// Once the counter reaches zero,it sends a trigger to:
//  1. change the start button in timerButtons.js from stop to start
//  2. send a trigger to pomoCounter.js to increment by 1

// Trigger from button press starts the countdown


// def counterminutes(minutes):
// 	while minutes>0:
// 		print minutes
		
// 		def counterseconds(n):
// 			while n>=0:
// 				print n
// 				time.sleep(1)
// 				n= n-1
		
// 		counterseconds(60)
		
// 		minutes-=1
// 		if minutes==0:
// 			print minutes
	
// def main():
// 	startTime=input("Enter a number of minutes: ")
// 	counterminutes(startTime)
// main()

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





// // function delayMinute() {
// // // checks and counts down
// // 	 while (currentTimeMinutes>=1){
// 		function delaySec(){
// // checks and counts down
// 	 		while (currentTimeSeconds>=0){ //&&  btnStartStop.textContent==="Reset"){
// 				console.log(currentTimeSeconds);
// 				currentTimeSeconds--;
// 			}
// 		}
// 		// console.log(currentTimeMinutes);
// 	 // 	currentTimeMinutes--;
// 	 // }
// 	setInterval(delaySec, 1000);
// // }

// // delayMinute();


