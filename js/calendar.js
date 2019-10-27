const calendar = [
  { 
    type: "event",
    title: "Welcome Party!",
    informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores assumenda deserunt doloribus eligendi iure odio ratione saepe sequi ullam. Asperiores debitis enim esse fugit itaque, neque odit suscipit voluptate!", 
		dato: "2019-10-05",
    tid: "14:15",
    sted: "Solsiden",
    link:"2019-10-05-welcome-party",
    tag: "social"
  },
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-05", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-05", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-11-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
];

function loadCalendar(calendar) { // !!Does not check for the same date in different years!! (help)
	const calendarId = document.getElementById("calendarElements")
	calendarId.innerHTML = ""
	let date = ''
	let month = -1
	let week = -1
	let day = -1
	let string = ''
	for (let i = 0; i < calendar.length; i++) {
		date = new Date(calendar[i].dato)
	
		if (date.getWeekNumber() != week) {
			week = date.getWeekNumber()
			string += `</ul></div>`
			string += `<h2 class="week">Week ${week}</h2>`
		}
		if (date.getDate() != day || date.getMonth() != month) {
			day = date.getDate()
			string += `<div class="calendar"><div class="calendarDate"><p>${date.getMonth()}/${day}</div></p><ul>`
		}
		string += `<li class="${calendar[i].type}"><p>${calendar[i].informasjon}</p>`
		+ `<p class="timeAndLocation">Time: ${calendar[i].tid}<br>Location: ${calendar[i].sted}</p></li>`
		if (date.getDate() != day) {
			string += `</ul></div>`
		}
		month = date.getMonth()
	}
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
		if ((object.id).includes(element.type) == true) {
			return false
		} else {
			return true
		}
  }
}


function checkboxes() {
	let filter = document.querySelectorAll("#filter div input")
	console.log(filter)
	let newCalendar = calendar
 	for (let i = 0; i < filter.length; i++) {
		filter[i].addEventListener("change", function() {
		  if (this.checked == false) {
				newCalendar = newCalendar.filter(checkType(this))
			} else {
				newCalendar = calendar
			}
			if (newCalendar.length > 0) {
				loadCalendar(newCalendar)
			}
		})
	}
}







