const calendar = [
  { 
    type: "event",
    title: "Welcome Party!",
    informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
		dato: "2019-10-05",
    tid: "14:15",
    sted: "Solsiden",
    link:"2019-10-05-welcome-party",
    tag: "social"
  },
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-06", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-07", tid: "18:00", sted: "Tyholt", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "event", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: ""},
];

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

Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

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