// INGVILD
//events
window.onload = printArticle;


//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function printArticle(event) {
	event.preventDefault();

	document.getElementById('list_event').innerHTML = '';
	for (i = 0; i < calendar.length; i++){
		if(calendar[i].tag != 'Practice'){
			var type = calendar[i].tag;
			var date = calendar[i].dato;
			var title = calendar[i].title;
			var mainText = calendar[i].informasjon;

			var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			var li = document.createElement('li');
			li.innerHTML = articleEl;
			document.getElementById('list_event').prepend(li);
		}

	}
}
//Sorter tag
function sortType(tag) {
	var liTag = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag != 'Practices'){
			if (calendar[i].tag == tag) {
				liTag.push(calendar[i]);
			}
		}}
	var listHTML = document.getElementById('list_event');
	listHTML.innerHTML = '';
	for (j = 0; j < liTag.length; j++) {

		var tag = liTag[j].tag;
		var date = liTag[j].dato;
		var title = liTag[j].title;
		var mainText = liTag[j].informasjon;

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostTag = document.createElement('li');
		liPostTag.innerHTML = articleEl;
		listHTML.prepend(liPostTag);
	}
};

var sortSocialHTML = document.getElementById('sortSocial');
var sortFundraiserHTML = document.getElementById('sortFundraiser');
var sortCompetitionHTML = document.getElementById('sortCompetition');

//Setter en funksjon til hver knapp

sortSocialHTML.onclick = function(){sortType('Social')};
sortFundraiserHTML.onclick = function() { sortType('Fundraiser')};
sortCompetitionHTML.onclick = function () {sortType('Competition')};


//sort by alphabet
function sortByAlpha() {
	//Ikke helt sikker på hvordan denne funker hehe
		calendar.sort(function (a,b) {
		var textA = a.title.toUpperCase();
		var textB = b.title.toUpperCase();

		//Vet ikke helt hva denne linjen gjør eller hvorfor den ser sånn ut
		return (textA > textB) ? -1: (textA < textB) ? 1: 0;
	});
	var listHTML = document.getElementById('list_event');
	listHTML.innerHTML = '';

	for (i = 0; i < calendar.length; i++){
		if(calendar[i].tag != 'Practice'){
			var type = calendar[i].tag;
			var date = calendar[i].dato;
			var title = calendar[i].title;
			var mainText = calendar[i].informasjon;


			var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			var li = document.createElement('li');
			li.innerHTML = articleEl;
			listHTML.prepend(li);
		}}
}

var sortAlphHTML = document.getElementById('sortAlph');
sortAlphHTML.addEventListener('click',sortByAlpha);


function sortByDate() {
		//Ikke helt sikker på hvordan denne funker hehe
		calendar.sort(function (a,b) {
		var textA = a.dato.toUpperCase();
		var textB = b.dato.toUpperCase();

		//Vet ikke helt hva denne linjen gjør eller hvorfor den ser sånn ut
		return (textA < textB) ? -1: (textA > textB) ? 1: 0;
	});
	var listHTML = document.getElementById('list_event');
	listHTML.innerHTML = '';

	for (i = 0; i < calendar.length; i++){
		if(calendar[i].tag != 'Practice'){
			var type = calendar[i].tag;
			var date = calendar[i].dato;
			var title = calendar[i].title;
			var mainText = calendar[i].informasjon;


			var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			var li = document.createElement('li');
			li.innerHTML = articleEl;
			listHTML.prepend(li);
		}
	}

}

var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.addEventListener('click', sortByDate);