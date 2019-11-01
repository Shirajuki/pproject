// function loadCalendar(calendarList) {
// 	calendarList = sortByDate(calendarList)
// 	const calendarId = document.getElementById("calendarElements");
// 	calendarId.innerHTML = '';
// 	let date = '';
// 	let year = -1;
// 	let month = -1;
// 	let week = -1;
// 	let day = -1;
// 	let string = '';
// 	let change = -1;
// 	for (let i = 0; i < calendarList.length; i++) {
// 		date = new Date(calendarList[i].dato);
// 		if (date.getWeekNumber() != week) {
// 			console.log(string)
// 			week = date.getWeekNumber();
// 			if (string != '') {
// 				string += `</ul></div>`
// 			}
// 			string += `<h2 class="week">Week ${week}</h2>`
// 		}
// 		if (date.getDate() != day || date.getMonth() != month || date.getFullYear() != year) {
// 			day = date.getDate();
// 			month = date.getMonth();
// 			year = date.getFullYear();
// 			if (change === 1) {
// 				string += `</ul></div>`
// 			}
// 			string += `<div class="calendar"><div class="calendarDate"><p>${month + 1}/${day}</p></div><ul>`
// 			change = change*-1
// 		}
// 		// Jonny OCD, sry (ノ°Д°）ノ︵ ┻━┻
// 		let info = calendarList[i].informasjon.length > 40 ? calendarList[i].informasjon.slice(0,40)+'...' : calendarList[i].informasjon
// 		string += `<li class="${calendarList[i].type}"><p><b>${calendarList[i].title}</b><br>${info}</p>`
// 			+ `<p class="timeAndLocation">Time: ${calendarList[i].tid}<br>Location: ${calendarList[i].sted}</p></li>`
// 		month = date.getMonth()
//
// 	}
// 	string += `</ul></div>`;
// 	calendarId.innerHTML += string
// }

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

function checkType(object) {
	return element => (object.id.includes(element.type) == true || object.id.includes(element.sted))
}
function sortByDate(list) {
	return list.sort((a, b) => new Date(a.dato) - (new Date(b.dato)))
}
function checkboxes() {
	let filter = document.querySelectorAll("#filter div input");
	let newCalendar = calendar;
	for (let i = 0; i < filter.length; i++) {
		filter[i].addEventListener("change", function() {
			newCalendar = calendar;
			for (let j = 0; j < filter.length; j++) {
				if (filter[j].checked == false) newCalendar = newCalendar.filter(checkType(filter[j]));
			}
			loadCalendar(newCalendar);
		});
	}
}
loadCalendar(calendar)
checkboxes()
