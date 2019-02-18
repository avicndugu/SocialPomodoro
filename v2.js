// Creating an updated version of the pomodoro app. It should run on the console only.
// I will add the view version once the design is done.

// First step: innitialize the timer
let pomo = {
	startMinutes:3,
	startSeconds:1,
}

let short = {
	startMinutes:1,
	startSeconds:1,
}
let long = {
	startMinutes:2,
	startSeconds:1,
}
let secInterval;

let record;

let	pomodoro=0;
let	shortB=0;
let	longB=0;


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
		startSeconds=1;
		displaySec();
	}
	else{
		displaySec();
		displayMin();
		window.clearInterval(secInterval);
		records();
	}
}

//////////////////// Use these 2 functions to get data and display it //////////////
function displaySec() {
	console.log(startSeconds);
}
function displayMin() {
	console.log(startMinutes);
}
///////////////////////////////////////////////////////////////////////////////////
//// RECORDs WHEN A WHOLE POMODORO/SHORT OR LONG BREAK IS COMPLETED ///////////////
function records(){
	if (record==="pomodoro"){
		pomodoro+=1;
		console.log("q");
		return pomodoro;

	}
	else if(record==="short"){
		shortB+=1;
		console.log("w");
		return shortB;
	}
	else if(record==="long"){
		longB+=1;
		console.log("e");
		return longB;
	}
	else{
		return record;
	}
	console.log(pomodoro);
	console.log(shortB);
	console.log(longB);
} 
/////////////////////////////////////////////////////////////////////////////////////
document.querySelector('#pomodoro').addEventListener('click',function(){
	startSeconds=pomo.startSeconds;
	startMinutes=pomo.startMinutes;
	window.clearInterval(secInterval);
	record="pomodoro";
	secInterval=setInterval(counter, 1000);
});

document.querySelector('#short').addEventListener('click',function(){
	startSeconds=short.startSeconds;
	startMinutes=short.startMinutes;
	window.clearInterval(secInterval);
	record="short";
	secInterval=setInterval(counter, 1000);
});

document.querySelector('#long').addEventListener('click',function(){
	startSeconds=long.startSeconds;
	startMinutes=long.startMinutes;
	window.clearInterval(secInterval);
	record="long";
	secInterval=setInterval(counter, 1000);
});