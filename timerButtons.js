// 1	c. button that starts and stops the timer
var btnStartStop = document.getElementById('startStop');
btnStartStop.addEventListener('click',updateBtn);
function updateBtn(){
	if (btnStartStop.textContent==="Start"){
		btnStartStop.textContent="Stop";
	}
	else{
		btnStartStop.textContent="Start";
	}
}
// 1	c. button that pauses and plays the timer
var btnPausePlay= document.getElementById('pausePlay');
btnPausePlay.addEventListener('click',updateBtnPausePlay);
function updateBtnPausePlay(){
	if (btnPausePlay.textContent==="Pause"){
		btnPausePlay.textContent="Play";
	}
	else{
		btnPausePlay.textContent="Pause";
	}	
}