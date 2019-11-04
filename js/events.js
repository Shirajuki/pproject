// XXX: Hei Jonny her, best practice er å definere/initalisere DOM-elements variabler og Event handlers på toppen av JS-filen. Bedre readability.
// INGVILD
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');
const listEvent = document.getElementById('list_event');
// EVENTLISTENERS:
//Assigning the function to its designated button
sortDateHTML.addEventListener('click', sortByDate);
//Assigning the function to its designated button
sortAlphHTML.addEventListener('click',sortByAlpha);
//Assigning the function to each button with its own specified parameter
sortSocialHTML.onclick = function() { sortType('Social') };
sortFundraiserHTML.onclick = function() { sortType('Fundraiser') };
sortCompetitionHTML.onclick = function () { sortType('Competition') };
// Her filterer jeg bort typen "practice"
const filteredCalendar = calendar.filter(e => e.type != 'practice');

// On page load
window.onload = () => {
	//Print all the articles to the page
	printArticle(filteredCalendar);
	// Redirect from calendar page
	if (window.location.hash.length > 0) {
		setTimeout(() => {
			const hash = window.location.hash.slice(1,window.location.hash.length);
			document.getElementById(hash).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
		},150);
	}
}

// Ha parameter, for å printe fra gitt liste.
function printArticle(list) {
	// Tror ikke at det er nødvendig med event.preventDefault(), En knapp funker jo ikke som noe når den ikke er gitt noen type.
	listEvent.innerHTML = '';
	// Her bruker jeg forof som en "renere" og kortere måte på å loope gjennom på. Siden vi ikke har bruk for iterative-telleren i,
	for (const article of list) {
		const type = article.tag;
		const date = article.dato;
		const title = article.title;
		const mainText = article.informasjon;
		// La til id for å referere via. kalender siden.
		const id = article.link;

		const articleEl = `<article id="${id}"><h2>${title}</h2><br> <p class="date">WHEN: ${date}</p> <p class="type">TAG: ${type}</p> <p class="mainText">${mainText}</p></article>`;
		const li = document.createElement('li');
		li.innerHTML = articleEl;
		listEvent.prepend(li);
	}
}

//Sort the articles by tag
// Denne funksjonen kan med funksjonen ovenfor gjøres mye mindre, ved å bare calle funksjonen printArticle() direkte her.
function sortType(tag) {
	// Ved bruk av filter() slipper vi en lang forloop for å sjekke om elemnt.tag == tag
	let liTag = filteredCalendar.filter(e => e.tag == tag);
	printArticle(liTag);
}

//Sort the articles in alphabetical order
// Det samme som sortType() Kan gjøres her også :)
function sortByAlpha() {
	// Ikke helt sikker på hvordan denne funker hehe
	// Det er bare å gjøre om, så det blir lettere forståelig. Her gjør jeg om første boktaven i tittelen om til ASCII tallet. Og sjekker deretter størrelse mellom dem. A(65) < B(66) for eksempel.
	const liAlpha = filteredCalendar.sort((a,b) => b.title.toUpperCase().charCodeAt(0) - a.title.toUpperCase().charCodeAt(0));
	printArticle(filteredCalendar);
}

//Sort the articles by when the event is happening
function sortByDate() {
	// XXX: Jonny her, ternary operator er gitt -> statement ? true : false. Her er det nested da, dermed får vi en if-else-statement
	// Bruk av arrow funksjon, og vi får one line! :D
	// Det her er det samme som ovenfor, altså i funksjon sortByAlpha()
	const liDate = filteredCalendar.sort((a,b) => new Date(b.dato) - new Date(a.dato));
	printArticle(liDate);
}
