function loadCalendar(calendarList) {
	calendarList = sortByDate(calendarList);
	const calendarId = document.getElementById("calendarElements");
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
		let datecheck = `${eldate.getDate()}-${eldate.getMonth()}-${eldate.getFullYear()}`;
		if (datecheck != date) {
			date = datecheck;
			var wrap = document.createElement('div');
			wrap.className = 'calendar'
			wrap.innerHTML = `<div class="calendarDate"><p>${eldate.getDate()}/${eldate.getMonth() + 1}</p></div>`;
			var wrapList = document.createElement('ul');
		}
		let info = (el.informasjon.length > 40 && el.type != 'practice') ? (el.informasjon.slice(0,40)+'...') : (el.informasjon);
		wrapList.innerHTML += `<li class="${el.type}"><p><b>${el.title}</b><br>${info}</p>
		<p class="timeAndLocation">Time: ${el.tid}<br>Location: ${el.sted}</p></li>`;
		wrap.appendChild(wrapList)
		calendarId.appendChild(wrap)
	}	
}

function checkType(domId) {
	return el => !(domId.includes(el.type) || domId.includes(el.sted.toLowerCase()))
} // Idea from https://stackoverflow.com/questions/7759237/how-do-i-pass-an-extra-parameter-to-the-callback-function-in-javascript-filter
// note: modified second function

function sortByDate(list) {
	return list.sort((a, b) => new Date(b.dato) - (new Date(a.dato)))
}

function checkCheckboxes(calendar) {
	let filter = document.querySelectorAll("#filter div input");
	console.log(filter);
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

function loadCheckboxes() {
	let locations=document.querySelector("#locationBox")
	let locationsfromdata=[]

	for (item of calendar){
		let loc=item.sted
		if (locationsfromdata.includes(loc)===false){
			locationsfromdata.push(loc)
		}
	}
	for (place of locationsfromdata){
		let label=place.toLowerCase().replace(" ","")+"Checkbox"
		locations.innerHTML+='<div class="input"><input id='+label+" "+'type="checkbox" checked><label for='+label+'>'+place+'</label></div>'
	}
}
loadCheckboxes()
loadCalendar(calendar);
checkCheckboxes(calendar);
