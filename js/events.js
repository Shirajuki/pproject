// INGVILD
//events
window.onload = skrivUtArtikkel;
//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function skrivUtArtikkel(event) {
	event.preventDefault();

	for (i = 0; i < calendar.length; i++){
		var type = calendar[i].tag;
		var date = calendar[i].dato;
		var title = calendar[i].title;
		var mainText = calendar[i].informasjon;

		//var liste = document.getElementById('liste');
		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
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

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
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

/*var datList = [];
for (i=0;i<calendar.length;i++){
	var delDash = (calendar[i].dato.replace('-',''));
	var dateNum = parseInt(delDash.replace('-',''));
	datList.push(dateNum);

}
console.log(datList);*/

function sortByDate2(list) {
	return list.sort(function (a, b) {
		return (new Date(a.dato)) - (new Date(b.dato))
	})
}

//Funker ikke
function sortByDate() {
	datList.sort();
	datList.reverse();


	//console.log(datList);

	var liDate = [];
	for (i = 0; i < calendar.length; i++) {

		if (datList[i] ==calendar[i].tag) {
			liDate.push(calendar[i]);
		}
	}

	var listeHTML = document.getElementById('liste');
	listeHTML.innerHTML = '';
	for (j = 0; j < liDate.length; j++) {

		var tag = liDate[j].tag;
		var date = liDate[j].dato;
		var title = liDate[j].title;
		var mainText = liDate[j].informasjon;

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostDate = document.createElement('li');
		liPostDate.innerHTML = articleEl;
		listeHTML.prepend(liPostDate);
	}

}


//funker ikke :(
//sortDateHTML.addEventListener('click', sortByDate2(calendar));
//Jukser, siden data nå sorteres automatisk setter jeg bare den normale laste funkjosnen
//til å "sortere" etter dato
var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.addEventListener('click', skrivUtArtikkel);

//sort by alphabet


function sortByAlpha() {
	//Ikke helt sikker på hvordan denne funker hehe
calendar.sort(function (a,b) {
	var textA = a.title.toUpperCase();
	var textB = b.title.toUpperCase();

	//Vet ikke helt hva denne linjen gjør eller hvorfor den ser sånn ut
	return (textA > textB) ? -1: (textA < textB) ? 1: 0;
});
	var liste = document.getElementById('liste');
	liste.innerHTML = '';

	for (i = 0; i < calendar.length; i++){
		var type = calendar[i].tag;
		var date = calendar[i].dato;
		var title = calendar[i].title;
		var mainText = calendar[i].informasjon;


		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var li = document.createElement('li');
		li.innerHTML = articleEl;
		liste.prepend(li);
	}

}

var sortAlphHTML = document.getElementById('sortAlph');
sortAlphHTML.addEventListener('click',sortByAlpha);

