const locations = document.querySelector("#locationBox")
const calendarId = document.getElementById("calendarElements");

function loadCalendar(calendarList) {
	calendarList = sortByDate(calendarList);
	calendarId.innerHTML = ''
	let week = 0;
	let date = '';
	let string = '';
	for (el of calendarList) {
		const eldate = new Date(el.dato);
		if (eldate.getWeekNumber() != week) {
			week = eldate.getWeekNumber();
			calendarId.innerHTML += `<h2 class="week">Week ${week}</h2>`
		}
		const datecheck = `${eldate.getDate()}-${eldate.getMonth()}-${eldate.getFullYear()}`;
		if (datecheck != date) {
			date = datecheck;
			var wrap = document.createElement('div');
			wrap.className = 'calendar'
			wrap.innerHTML = `<div class="calendarDate"><p>${eldate.getDate()}/${eldate.getMonth() + 1}</p></div>`;
			var wrapList = document.createElement('ul');
		}
		const info = (el.informasjon.length > 40 && el.type != 'practice') ? (el.informasjon.slice(0,40)+'...') : (el.informasjon);
		wrapList.innerHTML += `<li class="${el.type}"><p><b>${el.type == 'event' ? `<a href="events.html#${el.link}" class="anchorCalendar">${el.title}</a>` : el.title}"</b>${info}</p>
		<p class="timeAndLocation">Time: ${el.tid}<br>Location: ${el.sted}</p></li>`;
		wrap.appendChild(wrapList)
		calendarId.appendChild(wrap)
	}
}
function sortByDate(list) {
	return list.sort((a, b) => new Date(b.dato) - (new Date(a.dato)))
}
function checkCheckboxes(calendar) {
	const filter = document.querySelectorAll("#filter div input");
	let newCalendar = [];
	for (let i = 0; i < filter.length; i++) {
		filter[i].addEventListener("change", () => {
			newCalendar = [...calendar];
			for (let j = 0; j < filter.length; j++) {
				if (!filter[j].checked) {
					newCalendar = newCalendar.filter(el => !(filter[j].id.includes(el.type) || filter[j].id.includes(el.sted.toLowerCase())));
				}
			}
			loadCalendar(newCalendar);
		});
	}
}

function loadCheckboxes() {
	const locationsfromdata=[]
	for (const item of calendar){
		const loc = item.sted
		if (locationsfromdata.includes(loc)===false){
			locationsfromdata.push(loc)
		}
	}
	for (const place of locationsfromdata){
		const label = place.toLowerCase().replace(" ","")+"Checkbox"
		locations.innerHTML += `<div class="input"><input id="${label}" type="checkbox" checked><label for="${label}">${place}</label></div>`
	}
}
loadCheckboxes()
loadCalendar(calendar);
checkCheckboxes(calendar);
