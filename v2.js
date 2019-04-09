// Creating an updated version of the pomodoro app. It should run on the console only.
// I will add the view version once the design is done.

// First step: innitialize the timer
let pomo = {
	startMinutes:25,
	startSeconds:0,
}

let short = {
	startMinutes:5,
	startSeconds:60,
}
let long = {
	startMinutes:15,
	startSeconds:60,
}
let secInterval;

let record="pomodoro";

let	pomodoro=0;
let	shortB=0;
let	longB=0;

const SECONDS=document.getElementById('seconds');
const MINUTES=document.getElementById('minutes');
const PAUSEPLAY=document.getElementById('pause-play');
// const RECORDS= document.getElementById('records');

/////////////// RENDERING MINUTES AND SECONDS BEFORE THE COUNTERS START ///////////////
MINUTES.innerHTML=pomo.startMinutes;
SECONDS.innerHTML="0"+pomo.startSeconds;
// RECORDS.innerHTML=pomodoro;

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
		startSeconds=59;
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
	// RECORDS.innerHTML=pomodoro;
	// console.log(showRecords);
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
	// updateRecords();
	// return [pomodoro,shortB,longB];
}
// function showRecords(){
// 	// recorder();
// 	console.log(pomodoro);
// 	// console.log(data);
// 	// console.log(recorder());
// }

/////////////////////////////////////////////////////////////////////////////////////


////////////PERMANENT RECORDS ON LOCAL STORAGE///////////////////////////////////////
//BIG GOAL Should store the time one pomodoro is completed and the date and time of completion.
////////////////// GET THE TIME /////////////////////////////
// Generate the time, day and date string
function getTime() {
	var d= new Date();
	console.log(d);
	var t=d.toString();
	console.log(t);

	// Choose a specific section to be stored display.
	var time=t.slice(3,15)+", "+t.slice(16,21)+" ("+t.slice(25,33)+")";
	console.log(time);
	return time;
}

//////////////////END OF GET THE TIME ///////////////////////////
// PASS THE VALUE INTO 2 SEPERATE ARRAYS ///////////////////

// END OF PASS THE VALUE INTO 2 SEPERATE ARRAYS ///////////////////
// STRINGIFY TO STORE IN LOCAL STORAGE
// PARSE TO GET THE FUNCTION TO READ THIS VALUE.



document.querySelector('#pomodoro').addEventListener('click',function(){
	startSeconds=pomo.startSeconds;
	startMinutes=pomo.startMinutes;
	window.clearInterval(secInterval);
	record="pomodoro";
	secInterval=setInterval(counter, 1000);
	displayMin();
	displaySec();
});

document.querySelector('#short').addEventListener('click',function(){
	startSeconds=short.startSeconds;
	startMinutes=short.startMinutes;
	window.clearInterval(secInterval);
	record="short";
	secInterval=setInterval(counter, 1000);
	displayMin();
	displaySec();
});

document.querySelector('#long').addEventListener('click',function(){
	startSeconds=long.startSeconds;
	startMinutes=long.startMinutes;
	window.clearInterval(secInterval);
	record="long";
	secInterval=setInterval(counter, 1000);
	displayMin();
	displaySec();
});

document.querySelector('#reset').addEventListener('click',function(){
	window.clearInterval(secInterval);
	if(record==="pomodoro"){
		startSeconds=pomo.startSeconds;
		startMinutes=pomo.startMinutes;
	}else if(record==="long"){
	 	startSeconds=long.startSeconds;
	 	startMinutes=long.startMinutes;
	} else {
		startSeconds=short.startSeconds;
		startMinutes=short.startMinutes;
	}
	displayMin();
	displaySec();
});

PAUSEPLAY.addEventListener('click', function(){
	toggler();
	// window.clearInterval(secInterval);
	 if(!!secInterval) {
            clearInterval(secInterval);
            secInterval = undefined;
        } else secInterval = setInterval(counter, 1000);

});


// TOGGLE PLAY BUTTON BETWEEN PAUSE AND PLAY
function toggler() {
	if(PAUSEPLAY.innerText=="Play"){
		PAUSEPLAY.innerHTML="<b>Pause</b>";
		// secInterval=setInterval(counter, 1000);
	} else{
		PAUSEPLAY.innerHTML="<b>Play</b>";
		// window.clearInterval(secInterval);
	}
}


