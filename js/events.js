// INGVILD
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');
//events
window.onload = skrivUtArtikkel;
//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function skrivUtArtikkel(event) {
	event.preventDefault();

	document.getElementById('liste').innerHTML = '';
	for (i = 0; i < calendar.length; i++){
		const type = calendar[i].tag;
		// console.log(type)
		if (type == 'Practice') continue
		const date = calendar[i].dato;
		const title = calendar[i].title;
		const mainText = calendar[i].informasjon;
		//var liste = document.getElementById('liste');
		let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		let li = document.createElement('li');
		li.innerHTML = articleEl;
		document.getElementById('liste').prepend(li);
	}
}
//Sorter tag
function sorterType(tag) {
	let liTag = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == tag) {
			liTag.push(calendar[i]);
		}
	}
	let listeHTML = document.getElementById('liste');
	listeHTML.innerHTML = '';
	for (j = 0; j < liTag.length; j++) {

		let tag = liTag[j].tag;
		let date = liTag[j].dato;
		let title = liTag[j].title;
		let mainText = liTag[j].informasjon;

		let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		let liPostTag = document.createElement('li');
		liPostTag.innerHTML = articleEl;
		listeHTML.prepend(liPostTag);
	}
};
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
//Jukser, siden data nå sorteres automatisk setter jeg bare den normale laste funksjonen
//til å "sortere" etter dato
function sortDDate() {
	function sortByDate2(list) {
		return list.sort((a, b) => new Date(a.dato) - (new Date(b.dato)));
	}
	sortDateHTML.addEventListener('click', sortByDate2(calendar), skrivUtArtikkel);
}
sortDateHTML.addEventListener('click', sortDDate);


//sort by alphabet
function sortByAlpha() {
	let calendar2 = calendar;
	//Ikke helt sikker på hvordan denne funker hehe
	calendar2.sort(function (a,b) {
		var textA = a.title.toUpperCase();
		var textB = b.title.toUpperCase();

		//Vet ikke helt hva denne linjen gjør eller hvorfor den ser sånn ut
		return (textA > textB) ? -1: (textA < textB) ? 1: 0;
	});
	let liste = document.getElementById('liste');
	liste.innerHTML = '';

	for (i = 0; i < calendar2.length; i++){
		let type = calendar2[i].tag;
		let date = calendar2[i].dato;
		let title = calendar2[i].title;
		let mainText = calendar2[i].informasjon;


		let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		let li = document.createElement('li');
		li.innerHTML = articleEl;
		liste.prepend(li);
	}

}
sortAlphHTML.addEventListener('click',sortByAlpha);
