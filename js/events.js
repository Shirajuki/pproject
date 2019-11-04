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
};

var sortSocialHTML = document.getElementById('sortSocial');
var sortFundraiserHTML = document.getElementById('sortFundraiser');
var sortCompetitionHTML = document.getElementById('sortCompetition');

//Setter en funksjon til hver knapp

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

//funker ikke :(
//Jukser, siden data nå sorteres automatisk setter jeg bare den normale laste funkjosnen
//til å "sortere" etter dato
function sortDDate() {
	function sortByDate2(list) {
		return list.sort((a, b) => new Date(a.dato) - (new Date(b.dato)));


	}
	sortDateHTML.addEventListener('click', sortByDate2(calendar), skrivUtArtikkel);

}

var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.addEventListener('click', sortDDate);


//sort by alphabet
function sortByAlpha() {
	var calendar2 = calendar;
	//Ikke helt sikker på hvordan denne funker hehe
calendar2.sort(function (a,b) {
	var textA = a.title.toUpperCase();
	var textB = b.title.toUpperCase();

	//Vet ikke helt hva denne linjen gjør eller hvorfor den ser sånn ut
	return (textA > textB) ? -1: (textA < textB) ? 1: 0;
});
	var liste = document.getElementById('liste');
	liste.innerHTML = '';

	for (i = 0; i < calendar2.length; i++){
		var type = calendar2[i].tag;
		var date = calendar2[i].dato;
		var title = calendar2[i].title;
		var mainText = calendar2[i].informasjon;


		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var li = document.createElement('li');
		li.innerHTML = articleEl;
		liste.prepend(li);
	}

}

var sortAlphHTML = document.getElementById('sortAlph');
sortAlphHTML.addEventListener('click',sortByAlpha);

