const calendar = [
  {
    type: "event",
    title: "Welcome Party!",
    informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		dato: "2019-10-05",
    tid: "14:15",
    sted: "Solsiden",
    link:"2019-10-05-welcome-party",
    tag: "Social"
  },
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-06", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-07", tid: "18:00", sted: "Tyholt", link:"javascript:void(0)", tag: "Practice"},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
  {type: "event", title: "Drifting fun!", informasjon: "Drifting. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: "Social"},

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
		month = date.getMonth()
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


//events
window.onload = skrivUtArtikkel;
//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function skrivUtArtikkel() {


	for (i = 0; i < calendar.length; i++){
		var type = calendar[i].tag;
		var date = calendar[i].dato;
		var title = calendar[i].title;
		var mainText = calendar[i].informasjon;

		//var liste = document.getElementById('liste');
		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var li = document.createElement('li');
		li.innerHTML = articleEl;
		document.getElementById('liste').prepend(li);


	}
}
//hente ut type, også hente ut som parameter
//sortere ett hvilken verdi som er søtrst/minst (getTime())

//Hente ut knapp til å sortere etter type=practice, og tildele funksjon


//Sorter type Practice
function sorterType(tag) {
	console.log('jeg funker');
	var liType = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == tag) {
			liType.push(calendar[i]);


		}

	}
	var liste = document.getElementById('liste');
	liste.innerHTML = '';


	for (j = 0; j < liType.length; j++) {
		console.log(liType);

		var tag = liType[j].tag;
		var date = liType[j].dato;
		var title = liType[j].title;
		var mainText = liType[j].informasjon;

		console.log(tag);

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostType = document.createElement('li');
		liPostType.innerHTML = articleEl;
		liste.prepend(liPostType);
		console.log(liPostType);
	}
}


var sortPracticeHTML = document.getElementById('sortPractice');
var sortSocialHTML = document.getElementById('sortSocial');

sortSocialHTML.addEventListener('click',sorterType('Social'));

sortPracticeHTML.onclick = sorterType('Practice');



//Sortere type Social
function sorterTypeSocial() {
	var liSoc = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == 'Social') {
			liSoc.push(calendar[i]);


		}

	}
	var liste = document.getElementById('liste')
	liste.innerHTML = '';
	for (j = 0; j < calendar.length; j++) {
		var type = liSoc[j].tag;
		var date = liSoc[j].dato;
		var title = liSoc[j].title;
		var mainText = liSoc[j].informasjon;


		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostSoc = document.createElement('li');
		liPostSoc.innerHTML = articleEl;
		liste.prepend(liPostSoc);
	}
}

//Hente ut knapp til å sortere etter type=social, og tildele funksjon

/*
//Sortere type fundraiser
function sorterTypeFundraiser() {
	console.log('Fund - jeg funker');
	var liFun = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == 'Fundraiser') {
			liFun.push(calendar[i]);


		}

	}
	var liste = document.getElementById('liste');
	liste.innerHTML = '';
	for (j = 0; j < calendar.length; j++) {
		var type = liFun[j].tag;
		var date = liFun[j].dato;
		var title = liFun[j].title;
		var mainText = liFun[j].informasjon;


		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostFun = document.createElement('li');
		liPostFun.innerHTML = articleEl;
		liste.prepend(liPostFun);
	}
}
//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortFundraiserHTML = document.getElementById('sortFundraiser');
sortFundraiserHTML.addEventListener('click',sorterTypeFundraiser);

//Sortere type Competition
function sorterTypeCompetition() {
	var liCom = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == 'Competition') {
			liCom.push(calendar[i]);


		}

	}
	var liste = document.getElementById('liste')
	liste.innerHTML = '';
	for (j = 0; j < calendar.length; j++) {
		var type = liCom[j].tag;
		var date = liCom[j].dato;
		var title = liCom[j].title;
		var mainText = liCom[j].informasjon;


		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostCom = document.createElement('li');
		liPostCom.innerHTML = articleEl;
		liste.prepend(liPostCom);
	}
}

//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortCompetitionHTML = document.getElementById('sortCompetition');
sortCompetitionHTML.addEventListener('click',sorterTypeCompetition); */

loadCalendar(calendar)
checkboxes()

