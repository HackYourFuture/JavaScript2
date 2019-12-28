function currentTime() {
	const timeToShow = setInterval(timer, 1000);

	function timer() {
		const CT = new Date();
		document.querySelector('#showLocalTime').innerHTML = CT.toLocaleTimeString();
	}
}
currentTime();
