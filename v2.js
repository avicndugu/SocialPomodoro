// Creating an updated version of the pomodoro app. It should run on the console only.
// I will add the view version once the design is done.

// First step: innitialize the timer
let pomo = {
	startMinutes:3,
	startSeconds:10,
}

let short = {
	startMinutes:1,
	startSeconds:10,
}
let long = {
	startMinutes:2,
	startSeconds:10,
}
let secInterval;
// window.clearInterval(secInterval);

console.log(pomo.startMinutes);
console.log(pomo.startSeconds);
////////////////////// POMODORO COUNTER /////////////////////////

function counter() {
	if (startSeconds>0){
		startSeconds--;
		displaySec();
	}
	else if(startMinutes>0) {
		startMinutes--;
		displayMin();
		startSeconds=9;
		displaySec();
	}
	else{
		displaySec();
		displayMin();
		window.clearInterval(secInterval);
	}
}

function displaySec() {
	console.log(startSeconds);
}

function displayMin() {
	console.log(startMinutes);
}
// console.log(pomo.startMinutes);
// console.log(pomo.currentMinutes);
// console.log(pomo.currentSeconds);

document.querySelector('#pomodoro').addEventListener('click',function(){
	startSeconds=pomo.startSeconds;
	startMinutes=pomo.startMinutes;
	window.clearInterval(secInterval);
	secInterval=setInterval(counter, 1000);
});

document.querySelector('#short').addEventListener('click',function(){
	startSeconds=short.startSeconds;
	startMinutes=short.startMinutes;
	window.clearInterval(secInterval);
	secInterval=setInterval(counter, 1000);
});

document.querySelector('#long').addEventListener('click',function(){
	startSeconds=long.startSeconds;
	startMinutes=long.startMinutes;
	window.clearInterval(secInterval);
	secInterval=setInterval(counter, 1000);
});