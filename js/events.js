// INGVILD
//events
window.onload = skrivUtArtikkel;
//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function skrivUtArtikkel(event) {
	event.preventDefault();
	document.getElementById('liste').innerHTML = '';
	for (i = 0; i < calendar.length; i++){
		var type = calendar[i].tag;
		var date = calendar[i].dato;
		var title = calendar[i].title;
		var mainText = calendar[i].informasjon;

		//var liste = document.getElementById('liste');
		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var li = document.createElement('li');
		li.innerHTML = articleEl;
		document.getElementById('liste').prepend(li);
	}
}
//Sorter tag
function sorterType(tag) {
	var liTag = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == tag) {
			liTag.push(calendar[i]);
		}
	}
	var listeHTML = document.getElementById('liste');
	listeHTML.innerHTML = '';
	for (j = 0; j < liTag.length; j++) {

		var tag = liTag[j].tag;
		var date = liTag[j].dato;
		var title = liTag[j].title;
		var mainText = liTag[j].informasjon;

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostTag = document.createElement('li');
		liPostTag.innerHTML = articleEl;
		listeHTML.prepend(liPostTag);
	}
}
var sortPracticeHTML = document.getElementById('sortPractice');
var sortSocialHTML = document.getElementById('sortSocial');
var sortFundraiserHTML = document.getElementById('sortFundraiser');
var sortCompetitionHTML = document.getElementById('sortCompetition');

//Setter en funksjon til hver knapp
sortPracticeHTML.onclick = function() {sorterType('Practice')};
sortSocialHTML.onclick = function(){sorterType('Social')};
sortFundraiserHTML.onclick = function() { sorterType('Fundraiser')};
sortCompetitionHTML.onclick = function () {sorterType('Competition')};

var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.onclick = skrivUtArtikkel;
//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortCompetitionHTML = document.getElementById('sortCompetition');
// sortCompetitionHTML.addEventListener('click',sorterTypeCompetition);
