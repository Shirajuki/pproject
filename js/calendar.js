function loadCalendar(calendarList) {
	calendarList = sortByDate(calendarList);
	const calendarId = document.getElementById("calendarElements");
	let week = 0;
	let date = '';
	let string = '';
	for (el of calendarList) {
		const eldate = new Date(el.dato);
		if (eldate.getWeekNumber() != week) {
			week = eldate.getWeekNumber();
			string += (string != '') ? (`</ul></div> </div> <h2 class="week">Week ${week}</h2>`) : (`<h2 class="week">Week ${week}</h2>`);
		}
		let datecheck = `${eldate.getDate()}-${eldate.getMonth()}-${eldate.getFullYear()}`;
		if (datecheck != date) {
			date = datecheck;
			string += `</ul></div>`;
			string += `<div class="calendar"><div class="calendarDate"><p>${eldate.getMonth() + 1}/${eldate.getDate()}</p></div>`;
			string += '<ul>';
		}
		let info = (el.informasjon.length > 40) ? (el.informasjon.slice(0,40)+'...') : (el.informasjon);
		string += `<li class="${el.type}"><p><b>${el.title}</b><br>${info}</p>
		<p class="timeAndLocation">Time: ${el.tid}<br>Location: ${el.sted}</p></li>`;
	}
	calendarId.innerHTML = string;
}

function checkType(domId) {
	return el => !(domId.includes(el.type) || domId.includes(el.sted.toLowerCase()))
}
function sortByDate(list) {
	return list.sort((a, b) => new Date(a.dato) - (new Date(b.dato)))
}
function checkboxes(calendar) {
	let filter = document.querySelectorAll("#filter div input");
	let newCalendar = calendar;
	for (let i = 0; i < filter.length; i++) {
		filter[i].addEventListener("change", function() {
			newCalendar = calendar;
			for (let j = 0; j < filter.length; j++) {
				if (!filter[j].checked) {
					newCalendar = newCalendar.filter(checkType(filter[j].id));
				}
			}
			loadCalendar(newCalendar);
		});
	}
}
loadCalendar(calendar);
checkboxes(calendar);
