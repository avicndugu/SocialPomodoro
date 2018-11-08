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
// // variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
showMinutes.textContent=pomo.startMinutes;

var startPomoTimer= function(){
	secInterval=setInterval(delaying, 1000);
	pomodoro.disabled=true;
	reset.disabled=false;
}
var delaying = function (){
	// console.log("message");
	// checks and counts down
	if (pomo.currentSeconds>0){
		// displaying timer seconds in the page
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


var pausePomoTimer = function (){
	window.clearInterval(secInterval);
	pomodoro.disabled=false;
}
var ResetPomoTimer = function (){
	pomo.currentMinutes=pomo.startMinutes;
	pomo.currentSeconds=pomo.startSeconds;
	showMinutes.textContent=pomo.startMinutes;
	showSeconds.textContent=pomo.startSeconds;
	window.clearInterval(secInterval);
	pomodoro.disabled=false;
}