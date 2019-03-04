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

const SECONDS=document.getElementById('seconds');
const MINUTES=document.getElementById('minutes');
const RECORDS= document.getElementById('records');

/////////////// RENDERING MINUTES AND SECONDS BEFORE THE COUNTERS START ///////////////
MINUTES.innerHTML=pomo.startMinutes;
SECONDS.innerHTML=pomo.startSeconds;
RECORDS.innerHTML=pomodoro;

console.log(pomo.startMinutes);
console.log(pomo.startSeconds);
/////////////// END OF RENDERING MINUTES AND SECONDS BEFORE THE COUNTERS START ///////////////
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
		recorder();
		displayPomos();
	}
}

//////////////////// Use these 2 functions to get data and display it //////////////
function displaySec() {
	if (startSeconds<9){
		SECONDS.innerHTML="0"+startSeconds;
		console.log(startSeconds);
	} else {
		SECONDS.innerHTML=startSeconds;
		console.log(startSeconds);
	}
}
function displayMin() {
	if (startMinutes<9){
		MINUTES.innerHTML="0"+startMinutes;
		console.log(startMinutes);
	} else {
		MINUTES.innerHTML=startMinutes;
		console.log(startMinutes);
	}
	// console.log(startMinutes);
}
// Display the number pomodoro undertaken
function displayPomos(){
	RECORDS.innerHTML=pomodoro;
	// console.log(showRecords);
	// console();
}

///////////////////////////////////////////////////////////////////////////////////
//// RECORDs WHEN A WHOLE POMODORO/SHORT OR LONG BREAK IS COMPLETED ///////////////
function recorder(){
	if (record==="pomodoro"){
		pomodoro+=1;
		// console.log("q");
		// console.log(pomodoro);
		// return pomodoro;

	}else if(record==="short"){
		shortB+=1;
		// console.log("w");
		// console.log(shortB);
		// return shortB;
	}else if(record==="long"){
		longB+=1;
		// console.log("e");
		// console.log(longB);
		// return longB;
	}else {
		// return {pomodoro,shortB,longB};
	}
	// return [pomodoro,shortB,longB];
}
// function showRecords(){
// 	// recorder();
// 	console.log(pomodoro);
// 	// console.log(data);
// 	// console.log(recorder());
// }

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