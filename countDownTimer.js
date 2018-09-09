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

var pomoStartMinutes=20;
var currentTimeMinutes=pomoStartMinutes;
var pomoStartSeconds=20;
var currentTimeSeconds=pomoStartSeconds;

//////////// MINUTES COUNTER /////////////////////////

function delayMinute() {
// checks and counts down
	 if (currentTimeMinutes>=1){
		function delaySec(){
// checks and counts down
	 		if (currentTimeSeconds>=0){ //&&  btnStartStop.textContent==="Reset"){
				console.log(currentTimeSeconds);
				currentTimeSeconds--;
			}
		}
		console.log(currentTimeMinutes);
	 	currentTimeMinutes--;
	 }
	var secInterval =setInterval(delaySec, 1000);
}

delayMinute();


