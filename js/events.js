// INGVILD
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');
//events
window.onload = printArticle;


//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function printArticle(event) {
	event.preventDefault();
  
	document.getElementById('list_event').innerHTML = '';
  
	for (i = 0; i < calendar.length; i++){

		if(calendar[i].tag != 'Practice'){
			let type = calendar[i].tag;
			let date = calendar[i].dato;
			let title = calendar[i].title;
			let mainText = calendar[i].informasjon;

			let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			let li = document.createElement('li');
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
  
  
		let type = calendar[i].tag;
		let date = calendar[i].dato;
		let title = calendar[i].title;
		let mainText = calendar[i].informasjon;
	
		
		let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		let li = document.createElement('li');
		li.innerHTML = articleEl;
		listHTML.prepend(li);
		
	}
}

//Setter en funksjon til hver knapp
sortSocialHTML.onclick = function(){sorterType('Social')};
sortFundraiserHTML.onclick = function() { sorterType('Fundraiser')};
sortCompetitionHTML.onclick = function () {sorterType('Competition')};



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
			let type = calendar[i].tag;
			let date = calendar[i].dato;
			let title = calendar[i].title;
			let mainText = calendar[i].informasjon;


			let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			let li = document.createElement('li');
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
			let type = calendar[i].tag;
			let date = calendar[i].dato;
			let title = calendar[i].title;
			let mainText = calendar[i].informasjon;


			let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
			let li = document.createElement('li');
			li.innerHTML = articleEl;
			listHTML.prepend(li);
		}
	}

}

var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.addEventListener('click', sortByDate);

