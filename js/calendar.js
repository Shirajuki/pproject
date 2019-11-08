const locations = document.querySelector("#locationBox");
const calendarId = document.getElementById("calendarElements");
window.addEventListener('load', () => {
	loadCheckboxes(calendar);
	loadCalendar(calendar);
});

function loadCalendar(calendarList) {
	calendarList = sortListByDate(calendarList).reverse();
	calendarId.innerHTML = '';
	let week = 0, date = '', string = '';
	let wrap, wrapList;
	for (el of calendarList) {
		const eldate = new Date(el.date);
		if (eldate.getWeekNumber() != week) {
			week = eldate.getWeekNumber();
			calendarId.innerHTML += `<h2 class="week">Week ${week}</h2>`;
		}
		const datecheck = `${eldate.getDate()}-${eldate.getMonth()}-${eldate.getFullYear()}`;
		if (datecheck != date) {
			date = datecheck;
			wrap = document.createElement('div');
			wrap.className = 'calendar';
			wrap.innerHTML = `<div class="calendarDate"><p>${eldate.getDate()}/${eldate.getMonth() + 1}</p></div>`;
			wrapList = document.createElement('ul');
		}
		const info = (el.info.length > 40 && el.type != 'practice') ? (el.info.slice(0,40)+'...') : (el.info);
		wrapList.innerHTML += `<li class="${el.type}"><p><b>${el.type == 'event' ? `<a href="events.html#${el.link}" class="anchorCalendar">${el.title}</a>` : el.title + "<br>"}</b>${info}</p><p class="timeAndLocation">Time: ${el.time}<br>Location: ${el.location}</p></li>`;
		wrap.appendChild(wrapList);
		calendarId.appendChild(wrap);
	}
};

function loadCheckboxes(calendar) {
	const locationsFromData = Array.from(new Set(calendar.map(x => x.location)))
	for (const place of locationsFromData){
		const label = place.toLowerCase().replace(" ","")+"Checkbox"
		locations.innerHTML += `<div class="input"><input id="${label}" type="checkbox" checked><label for="${label}">${place}</label></div>`;
	}
	const filters = document.querySelectorAll("#filter div input");
	for (let i = 0; i < filters.length; i++) {
		filters[i].addEventListener("change", () => {
			let newCalendar = [...calendar];
			for (let j = 0; j < filter.length; j++) {
				if (!filter[j].checked) newCalendar = newCalendar.filter(el => !(filter[j].id.includes(el.type) || filter[j].id.includes(el.sted.toLowerCase())));
			}
			loadCalendar(newCalendar);
		});
	}
};
