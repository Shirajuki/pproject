const calendar = [
	{
		type: "event",
		title: "Welcome Party!",
		informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		dato: "2019-10-05",
<<<<<<< HEAD
		tid: "14:15",
		sted: "Solsiden",
		link:"2019-10-05-welcome-party",
		tag: "Social"
	},
	{type: "practice", title: "Group Practice #32", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-06", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
	{type: "practice", title: "Group Practice #33", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-07", tid: "18:00", sted: "Tyholt", link:"javascript:void(0)", tag: "Practice"},
	{type: "practice", title: "Group Practice #34", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
	{type: "event", title: "Drifting fun!", informasjon: "Drifting. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: "Social"},
	{type: "event", title: "Party at mine", informasjon: "We will have a great party at mine (near Gløshaugen) next friday in order to celebrate our great efforts so far this year", dato: "2019-10-29", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Social"},
	{type: "event", title: "Lets make some money", informasjon: "During this week we have a fundraising event to raise some money for the club. More info to come", dato: "2019-10-30", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Fundraiser"},
	{type: "event", title: "Big competition in OSLO", informasjon: "The big racer competition is being held in Oslo on the 1.11.19. More information to come soon your way", dato: "2019-10-30", tid: "18:00", sted: "Oslo", link:"javascript:void(0)", tag: "Competition"},
];

function loadCalendar(calendarList) {
	calendarList = sortByDate(calendarList)
	const calendarId = document.getElementById("calendarElements");
	calendarId.innerHTML = '';
	let date = '';
	let year = -1;
	let month = -1;
	let week = -1;
	let day = -1;
	let string = '';
	let change = -1;
	for (let i = 0; i < calendarList.length; i++) {
		date = new Date(calendarList[i].dato);
		if (date.getWeekNumber() != week) {
			week = date.getWeekNumber();
			if (string != '') {
				string += `</ul></div>`
			}
			string += `<h2 class="week">Week ${week}</h2>`
		}
		if (date.getDate() != day || date.getMonth() != month || date.getFullYear() != year) {
			day = date.getDate();
			month = date.getMonth();
			year = date.getFullYear();
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
	string += `</ul></div>`;
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
function skrivUtArtikkel(event) {
	event.preventDefault();

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




//Sorter tag
function sorterType(tag) {

	var liTag = [];
	for (i = 0; i < calendar.length; i++) {
		if (calendar[i].tag == tag) {
			liTag.push(calendar[i]);


		}

	}
	var listeHTML = document.getElementById('liste');
	listeHTML.innerHTML = '';
	for (j = 0; j < liTag.length; j++) {

		var tag = liTag[j].tag;
		var date = liTag[j].dato;
		var title = liTag[j].title;
		var mainText = liTag[j].informasjon;

		var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+tag+'</p> <p class="mainText">'+mainText+'</p></article>';
		var liPostTag = document.createElement('li');
		liPostTag.innerHTML = articleEl;
		listeHTML.prepend(liPostTag);
	}
}
function sortByAlph (){
	for (t=0; t < calendar)
}


var sortPracticeHTML = document.getElementById('sortPractice');
var sortSocialHTML = document.getElementById('sortSocial');
var sortFundraiserHTML = document.getElementById('sortFundraiser');
var sortCompetitionHTML = document.getElementById('sortCompetition');

//Setter en funksjon til hver knapp
sortPracticeHTML.onclick = function() {sorterType('Practice')};
sortSocialHTML.onclick = function(){sorterType('Social')};
sortFundraiserHTML.onclick = function() { sorterType('Fundraiser')};
sortCompetitionHTML.onclick = function () {sorterType('Competition')};

var sortDateHTML = document.getElementById('sortDate');
sortDateHTML.onclick = skrivUtArtikkel;

loadCalendar(calendar);
checkboxes();


//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortCompetitionHTML = document.getElementById('sortCompetition');
sortCompetitionHTML.addEventListener('click',sorterTypeCompetition); */

loadCalendar(calendar)
checkboxes()


