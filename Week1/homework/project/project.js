const quotes = [
	'<q> The Way Get Started Is To Quit Talking And Begin Doing.</q> <br> <br> <cite> -Walt Diseny </cite> <br>',
	'<q>You only live once, but if you do it right, once is enough.</q> <br> <br><cite>-Mae West</cite> <br>',
	'<q>I am so clever that sometimes I dont understand a single word of what I am saying.</q> <br> <br> <cite> -Oscar Wilde</cite> <br>',
	'<q>Two things are infinite: the universe and human stupidity and Im not sure about the universe.</q> <br> <br><cite> -Albert Einstein</cite>  <br>',
	'<q>All men who have turned out worth anything have had the chief hand in their own education.</q> <br> <br><cite>-Walter Scott</cite> <br>',
	'<q>Trust yourself You know more than you think you do. </q><br><br><cite> -Benjamin Spock</cite><br> ',
	'<q>The Way Get Started Is To Quit Talking And Begin Doing. </q> <br> <br><cite> -Walt Diseny</cite> <br>'
];
function newQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function random_bg_color() {
	const x = Math.floor(Math.random() * 256);
	const y = Math.floor(Math.random() * 256);
	const z = Math.floor(Math.random() * 256);
	const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
	console.log(bgColor);

	document.getElementById('container').style.background = bgColor;
}

random_bg_color();
