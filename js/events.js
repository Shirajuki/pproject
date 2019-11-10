// Load DOMs:
const sortSocialHTML = document.getElementById('sortSocial');
const sortFundraiserHTML = document.getElementById('sortFundraiser');
const sortCompetitionHTML = document.getElementById('sortCompetition');
const sortDateHTML = document.getElementById('sortDate');
const sortAlphHTML = document.getElementById('sortAlph');
const listEvent = document.getElementById('listEvent');
const filteredCalendar = calendar.filter(e => e.type != 'practice');
// EVENTLISTENERS: Assigning the function to its designated button
sortDateHTML.addEventListener('click', sortByDate);
sortAlphHTML.addEventListener('click', sortByAlpha);
sortSocialHTML.onclick = () => { sortType('Social') };
sortFundraiserHTML.onclick = () => { sortType('Fundraiser') };
sortCompetitionHTML.onclick =  () => { sortType('Competition') };
let usingList = [];
window.addEventListener('load', () => {
	printArticle(filteredCalendar);
	if (window.location.hash.length > 0) {
		setTimeout(() => {
			const hash = window.location.hash.slice(1,window.location.hash.length);
			document.getElementById(hash).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
		},150);
	}
});

function printArticle(list) {
	// Checks if the same button is sorted twice, resets to default sort if so
	if (JSON.stringify(usingList) === JSON.stringify(list)) {
		usingList = [];
		list = [...filteredCalendar];
	} else {
		usingList = [...list];
	}
	// Prints the articles
	listEvent.innerHTML = '';
	for (const article of list) {
		const articleEl = `<article id="${article.link}"><h2>${article.title}</h2><br> <p class="date">WHEN: ${new Date(article.date).toNorwegianLocaleDateString()}</p> <p class="type">TAG: ${article.tag}</p> <p class="mainText">${article.info}</p></article>`;
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
  const liDate = sortListByDate(filteredCalendar);
	printArticle(liDate);
}
