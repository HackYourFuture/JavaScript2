/*global console*/
'use strict';

var namesBook = [
  'the_davinci_code',
  'the_kite_runner', 
  'the_bamboo_stalk', 
  'do_not_tell_mommy', 
  'inferno', 
  'angels_and_demons',
  'les_miserables',
  'crime_and_punishment',
  'blindness',
  'the_monk_who_sold_his_ferrari'
];
var ownerBook = [
		'Dan Brown',
		'Khaled Hosseini',
		'Saud Alsanousi',
		'Toni Maguire',
		'Dan Brown',
		'Dan Brown',
		'Victor Hugo',
		'Fyodor Dostoevsky',
		'José Saramago',
		'Robin Sharma'
	],
	titleBook = [
		'The Davinci Code',
		'The Kite Runner',
		'The Bamboo Stalk ',
		'Don\'t Tell Mommy',
		'inferno',
		'Angels And Demons',
		'les miserables',
		'Crime And Punishment',
		'Blindness',
		'The monk who sold his ferrari'
	];
var i;
var myOl = document.createElement('ol');
document.getElementById('myList').appendChild(myOl);

namesBook.forEach(function() {
	
	var myNewLi = document.createElement('li');
	myOl.appendChild(myNewLi);
	myNewLi.setAttribute('id', 'li' + i);
});

var myId = namesBook,
	auth = ownerBook,
	tit = titleBook,
	ob = {
		idBook: myId,
		title: tit,
		author: auth,
		language: 'English'
	};

for (i = 0; i < ownerBook.length; i = i + 1) {
	var myH = document.createElement('h2');
	var myNewLi = document.getElementsByTagName('li');
	myNewLi[i].appendChild(myH);
	myH.textContent = titleBook[i];

	var myOtherH = document.createElement('h3');
	var myNewLi = document.getElementsByTagName('li');
	myNewLi[i].appendChild(myOtherH);
	myOtherH.textContent = 'By : ' + ownerBook[i];

	var myp = document.createElement('p');
	var myNewLi = document.getElementsByTagName('li');
	myNewLi[i].appendChild(myp);
	myp.textContent = 'the language : ' + ob.language;

	var myImg = document.createElement('img');
	var myNewLi = document.getElementsByTagName('li');
	myNewLi[i].appendChild(myImg);
	myImg.setAttribute('src', 'img/' + namesBook[i] + '.jpg');
	myImg.setAttribute('alt', 'Here is the picture');
}
