var timer=1;
// var paused;
var pomos=0;
var round=0;
var pomo = {
	startMinutes:25,
	startSeconds:60,
	currentMinutes:24,
	currentSeconds:1
}
// console.log(pomo.currentMinutes);

var shortB ={
	startMinutes:5,
	startSeconds:60,
	currentMinutes:4,
	currentSeconds:59
}
// console.log(shortB.currentMinutes);

var longB = {
	startMinutes:15,
	startSeconds:60,
	currentMinutes:14,
	currentSeconds:59
}
shortButton = document.getElementById('short');
longButton = document.getElementById('long');
// // variables for displaying timer in the page
var showSeconds=document.getElementById('seconds');
var showMinutes=document.getElementById('minutes');
var buttons=document.getElementsByTagName("button");
var paused=document.getElementById('pause-icon');
var played=document.getElementById('play-icon');
var reseted=document.getElementById('reset-icon');

paused.style.display="none";
reseted.style.display="none";
shortButton.disabled=true;
longButton.disabled=true;
reseted.style.display="none";
showDisabled();
// showMinutes.textContent=pomo.startMinutes;
// showSeconds.textContent=pomo.startSeconds;
var startPomoTimer= function(){
	timer=1;
	// pomo.currentMinutes=pomo.currentMinutes;
	// pomo.currentSeconds=pomo.currentSeconds;
	// showMinutes.textContent=pomo.currentMinutes;
	// showSeconds.textContent=pomo.startSeconds;
	pomoSecInterval=setInterval(pomoDelaying, 1000);
	pomodoro.disabled=true;
	// reset.disabled=false;
	reseted.style.display="inline-block";
	shortButton.disabled=true;
	paused.style.display="inline-block";
	longButton.disabled=true;
	played.style.display="none";
	showDisabled();
}
var pomoDelaying = function (){
	// checks and counts down
	if (pomo.currentSeconds>0){
		// displaying timer seconds in the page
		showMinutes.textContent=pomo.currentMinutes;
		showSeconds.textContent=pomo.currentSeconds;
		pomo.currentSeconds--;
	}
	else if (pomo.currentMinutes>0) {
		showSeconds.textContent=pomo.currentSeconds;
		pomo.currentMinutes--;
		pomo.currentSeconds=59;
	}
	else{
		pomo.currentMinutes=0;
		pomo.currentSeconds=0;
		showSeconds.textContent=pomo.currentSeconds;
		// NUMBER OF POMOS 
		pomoCounter(); 
		endOfPomo();
	}
	// stops delaying code from running after timer reaches 0
	function endOfPomo() {
		window.clearInterval(pomoSecInterval);
		// console.log("End of pomo");
		// console.log(pomo.startMinutes);
		// Innitialize the timer to original state
		showMinutes.textContent=pomo.startMinutes;
// pomo.currentSeconds=pomo.startSeconds;
		// console.log(pomo.currentSeconds);
		// Reactivate all the buttons
		playAudio();
		pomodoro.disabled=true;
		played.style.display="none";
		paused.style.display="none";
		shortButton.disabled=false;
	}
	function pomoCounter() {
		if (pomos<4){
			pomos=pomos+1;
			console.log(pomos);
		}
		else{
			console.log(pomos);
			round=round+1;
			pomos=0;
			console.log(round);
			console.log("long Break");
		}
	}
	function pomoFlow() {
		if (pomos<4) {
			pomo.disabled=true;
			shortButton.disabled=false;
			longButton.disabled=true;
			console.log("Short Break");
			showDisabled();
		}
		else {
		// 	pomo.disabled=true;
			shortButton.disabled=true;
			longButton.disabled=false;
			showDisabled();
		}
	}
}



// ////////////////////SHORT BREAK CODE //////////////////////////////////

var startShortBTimer= function(){
	timer=2;
	// shortB.currentMinutes=shortB.startMinutes;
	// shortB.currentSeconds=shortB.startSeconds;
	showMinutes.textContent=shortB.currentMinutes;
	shortSecInterval=setInterval(shortDelaying, 1000);
	shortButton.disabled=true;
	longButton.disabled=true;
	pomodoro.disabled=true;
	reseted.style.display="inline-block";
	paused.style.display="inline-block";
	played.style.display="none";
}
function shortDelaying(){
// checks and counts down
	 if (shortB.currentSeconds>0){
	// displaying timer seconds in the page
		showSeconds.textContent=shortB.currentSeconds;
		showMinutes.textContent=shortB.currentMinutes;
		shortB.currentSeconds--;
	}

	else if (shortB.currentMinutes>0) {
		// console.log(currentTimeMinutes);
		showSeconds.textContent=shortB.currentSeconds;
		shortB.currentMinutes--;
		// showMinutes.textContent=shortB.currentMinutes;
		shortB.currentSeconds=59;
		// showMinutes.textContent=shortB.currentMinutes;
		// shortB.currentSeconds=5;
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
	window.clearInterval(shortSecInterval);
	// Innitialize the timer to original state
	showMinutes.textContent=shortB.startMinutes;
	showSeconds.textContent=shortB.startSeconds;
	console.log(shortB.startMinutes);
	console.log(shortB.startSeconds);
	// Reactivate all the buttons
	playAudio();
	pomodoro.disabled=false;
	shortButton.disabled=true;
	longButton.disabled=true;
	showDisabled();
}

// ////////////////////END OF SHORT BREAK CODE //////////////////////////////////

// ////////////////////LONG BREAK CODE //////////////////////////////////

var startLongBTimer =function () {
	timer=3;
	// longB.currentMinutes=longB.startMinutes;
	// longB.currentSeconds=longB.startSeconds;
	showMinutes.textContent=longB.startMinutes;
	longSecInterval=setInterval(longDelaying, 1000);
	longButton.disabled=true;
	shortButton.disabled=true;
	pomodoro.disabled=true;
	reseted.style.display="inline-block";
	paused.style.display="inline-block";
	played.style.display="none";
	showDisabled();
}
function longDelaying(){
// checks and counts down
	 if (longB.currentSeconds>0){
	// displaying timer seconds in the page
		showSeconds.textContent=longB.currentSeconds;
		showMinutes.textContent=longB.currentMinutes;
		longB.currentSeconds--;
	}
	else if (longB.currentMinutes>0) {
		showSeconds.textContent=longB.currentSeconds;
		longB.currentMinutes--;
		longB.currentSeconds=59;
		// showMinutes.textContent=longB.currentMinutes;
		// longB.currentSeconds=5;
	 }
	 else{
	  	//if (currentTimeMinutes==0){
		longB.currentMinutes=0;
		longB.currentSeconds=0;
		showSeconds.textContent=longB.currentSeconds;
		endOfLongB();
		}
}
// stops delaying code from running after timer reaches 0
function endOfLongB() {
	clearInterval(longSecInterval);
	console.log("End of longB");
// Innitialize the timer to original state
	showMinutes.textContent=longB.startMinutes;
	// longB.currentSeconds=longB.startSeconds;
	console.log(longB.currentSeconds);
// Reactivate all the buttons
	// long.disabled=false;
	playAudio();
	pomodoro.disabled=false;
	played.style.display="none";
	paused.style.display="inline-block";
	shortButton.disabled=true;
	longButton.disabled=true;
	reseted.style.display="inline-block";
	showDisabled();

}
/////////////////END OF LONG BREAK COUNTER////////////////////////////

var pausePomoTimer = function (){
	if (timer==1) {
		window.clearInterval(pomoSecInterval);
		pomodoro.disabled=true;
		played.style.display="inline-block";
		paused.style.display="none";
		showDisabled();
	}
	if (timer==2) {
		window.clearInterval(shortSecInterval);
		shortButton.disabled=true;
		played.style.display="inline-block";
		paused.style.display="none";
		showDisabled();
	}
	if (timer==3) {
		window.clearInterval(longSecInterval);
		longButton.disabled=true;
		played.style.display="inline-block";
		paused.style.display="none";
		showDisabled();
	}
}
var playPomoTimer = function (){
	if (timer==1){
		pomoSecInterval=setInterval(pomoDelaying, 1000);
		pomodoro.disabled=true;
		reseted.style.display="inline-block";
		paused.style.display="inline-block";
		played.style.display="none";
		showDisabled();
	}
	if (timer==2) {
		shortSecInterval=setInterval(shortDelaying, 1000);
		shortB.disabled=true;
		reseted.style.display="inline-block";
		played.style.display="none";
		paused.style.display="inline-block";
		showDisabled();
	}
	if (timer==3) {
		longSecInterval=setInterval(longDelaying, 1000);
		longButton.disabled=true;
		reseted.style.display="inline-block";
		paused.style.display="inline-block";
		played.style.display="none";
		showDisabled();
	}
}
var ResetPomoTimer = function (){
	if (timer==1){
		window.clearInterval(pomoSecInterval);
		// pomo.currentMinutes=pomo.startMinutes;
		pomo.currentSeconds=59;
		showMinutes.textContent=pomo.startMinutes;
		showSeconds.textContent=pomo.startSeconds;
		// pomo.currentSeconds=pomo.currentSeconds;
		pomodoro.disabled=false;
		shortButton.disabled=false;
		played.style.display="none";
		paused.style.display="none";
		reseted.style.display="none";
		showDisabled();
	}
	if (timer==2) {
		window.clearInterval(shortSecInterval);
		// shortB.currentMinutes=shortB.startMinutes;
		shortB.currentSeconds=59;
		showMinutes.textContent=shortB.startMinutes;
		showSeconds.textContent=shortB.startSeconds;
		shortButton.disabled=false;
		pomodoro.disabled=false;
		longButton.disabled=false;
		played.style.display="none";
		paused.style.display="none";
		reseted.style.display="none";
		showDisabled();
	}
	if (timer==3) {
		window.clearInterval(longSecInterval);
		// longB.currentMinutes=longB.currentMinutes;
		longB.currentSeconds=59;
		showMinutes.textContent=longB.startMinutes;
		showSeconds.textContent=longB.startSeconds;
		shortButton.disabled=false;
		pomodoro.disabled=false;
		longButton.disabled=false;
		played.style.display="none";
		paused.style.display="none";
		reseted.style.display="none";
		showDisabled();
}
}
function showDisabled() {
	buttons=Array.from(buttons);
	buttons.forEach(function(button){
		if (button.disabled==true) {
			button.style.opacity="0.5";
		}
		else {
			button.style.opacity="1";
		}
	});
}
console.log(buttons);




//////////////////testingggggggggggg////////////////
// var x = document.getElementById("notification"); 

// function playAudio() { 
//     alert("1");
//     x.play(); 
var notification = document.getElementById("notification"); 

function playAudio() { 
    notification.play(); 
}

////// hiding buttons that are not in use////////////////
function resetPressed() {
	played.style.display="inline-block";
	paused.style.display="none";
	reseted.style.display="none";
}

function playPressed() {
	played.style.display="none";
	paused.style.display="inline-block";
	reseted.style.display="inline-block";
}
function pausePressed() {
	played.style.display="inline-block";
	paused.style.display="none";
	reseted.style.display="inline-block";
	// if(paused.style.display="none"){
	// paused.style.display="inline-block";
	// }
	// else {
	// 	paused.style.display="none";
	// }
}
