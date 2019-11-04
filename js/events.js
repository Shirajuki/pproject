// INGVILD
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');

window.onload = printArticle;

//Print all the articles to the page
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

//Sort the articles by tag
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

		let tag = liTag[j].tag;
		let date = liTag[j].dato;
		let title = liTag[j].title;
		let mainText = liTag[j].informasjon;

		let articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">WHEN: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		let liPostTag = document.createElement('li');
		liPostTag.innerHTML = articleEl;
		listHTML.prepend(liPostTag);
	}
}

//Assigning the function to each button with its own specified parameter
sortSocialHTML.onclick = function(){sortType('Social')};
sortFundraiserHTML.onclick = function() { sortType('Fundraiser')};
sortCompetitionHTML.onclick = function () {sortType('Competition')};



//Sort the articles in alphabetical order
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

//Assigning the function to its designated button
sortAlphHTML.addEventListener('click',sortByAlpha);

//Sort the articles by when the event is happening
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

//Assigning the function to its designated button
sortDateHTML.addEventListener('click', sortByDate);

