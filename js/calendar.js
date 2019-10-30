function loadCalendar(calendarList) {
	calendarList = sortByDate(calendarList)
	const calendarId = document.getElementById("calendarElements")
	calendarId.innerHTML = ''
	let date = ''
	let year = -1
	let month = -1
	let week = -1
	let day = -1
	let string = ''
	let change = -1
	for (let i = 0; i < calendarList.length; i++) {
		date = new Date(calendarList[i].dato)
		if (date.getWeekNumber() != week) {
			week = date.getWeekNumber()
			if (string != '') {
				string += `</ul></div>`
			}
			string += `<h2 class="week">Week ${week}</h2>`
		}
		if (date.getDate() != day || date.getMonth() != month || date.getFullYear() != year) {
			day = date.getDate()
			month = date.getMonth()
			year = date.getFullYear()
			if (change === 1) {
				string += `</ul></div>`
			}
			string += `<div class="calendar"><div class="calendarDate"><p>${month + 1}/${day}</p></div><ul>`
			change = change*-1
		}
		string += `<li class="${calendarList[i].type}"><p>${calendarList[i].informasjon}</p>`
		+ `<p class="timeAndLocation">Time: ${calendarList[i].tid}<br>Location: ${calendarList[i].sted}</p></li>`
	}
	string += `</ul></div>`
	calendarId.innerHTML += string
}

function checkType(object) {
  return function(element) {
		if (object.id.includes(element.type) == true || object.id.includes(element.sted)) {
			return false
		} else {
			return true
		}
  }
}

function sortByDate(list) {
	return list.sort(function (a, b) {
		return (new Date(a.dato)) - (new Date(b.dato))
	})
}

function checkboxes() {
	let filter = document.querySelectorAll("#filter div input")
	let newCalendar = calendar
 	for (let i = 0; i < filter.length; i++) {
		filter[i].addEventListener("change", function() {
			newCalendar = calendar
			for (let j = 0; j < filter.length; j++) {
				if (filter[j].checked == false) {
					newCalendar = newCalendar.filter(checkType(filter[j]))
				}
			}
		  loadCalendar(newCalendar)
		})
	}
}
loadCalendar(calendar)
checkboxes()
