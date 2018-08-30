// Set up a trigger that will start the counting
// If the counter reaches zero it sends a trigger that increments the b count by 1

var btnStartStop = document.getElementById('startStop');
var startTime=60;
var currentTimeSeconds=startTime;
// btnStartStop.addEventListener('click',timer);
// function timer(){



	
// 	if (btnStartStop.textContent==="Start"){
		
// 	}
// 	else{
	
// 	}
// }
// countdown in seconds
setInterval(delaying, 1000);
function delaying(){
// checks and counts down
	 if (currentTimeSeconds>0){
		currentTimeSeconds--;
		console.log(currentTimeSeconds);
	 }
//Restarts seconds counter after reaching zero
	 else {
	 	currentTimeSeconds=startTime;
	 }
}

while (currentTimeSeconds<0) {
	delaying();
}

// countdown in minutes
// if currentTime
