// INGVILD
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');
const listEvent = document.getElementById('list_event');
const filteredCalendar = calendar.filter(e => e.type != 'practice');
// EVENTLISTENERS:
//Assigning the function to its designated button
sortDateHTML.addEventListener('click', sortByDate);
//Assigning the function to its designated button
sortAlphHTML.addEventListener('click',sortByAlpha);
//Assigning the function to each button with its own specified parameter
sortSocialHTML.onclick = function() { sortType('Social') };
sortFundraiserHTML.onclick = function() { sortType('Fundraiser') };
sortCompetitionHTML.onclick = function () { sortType('Competition') };

// On page load
window.onload = () => {
	printArticle(filteredCalendar);
	if (window.location.hash.length > 0) {
		setTimeout(() => {
			const hash = window.location.hash.slice(1,window.location.hash.length);
			document.getElementById(hash).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
		},150);
	}
}

function printArticle(list) {
	listEvent.innerHTML = '';
	for (const article of list) {
		const type = article.tag;
		const date = article.dato;
		const title = article.title;
		const mainText = article.informasjon;
		const id = article.link;
		const articleEl = `<article id="${id}"><h2>${title}</h2><br> <p class="date">WHEN: ${date}</p> <p class="type">TAG: ${type}</p> <p class="mainText">${mainText}</p></article>`;
		const li = document.createElement('li');
		li.innerHTML = articleEl;
		listEvent.prepend(li);
	}
}

function sortType(tag) {
	const liTag = filteredCalendar.filter(e => e.tag == tag);
	printArticle(liTag);
}

function sortByAlpha() {
	const liAlpha = filteredCalendar.sort((a,b) => b.title.toUpperCase().charCodeAt(0) - a.title.toUpperCase().charCodeAt(0));
	printArticle(filteredCalendar);
}

function sortByDate() {
	const liDate = filteredCalendar.sort((a,b) => new Date(a.dato) - new Date(b.dato));
	printArticle(liDate);
}
