window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("main").style.display = "block";
  },300)
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  },800)
}

const calendarHomepage = document.getElementById('calendarHomepage');
const eventsHomepage = document.getElementById('eventsHomepage');
console.log(calendarHomepage,eventsHomepage);
document.getElementById('weekday').innerHTML = `Week ${new Date().getWeekNumber()} - date: ${new Date().toLocaleDateString("nb-NO")}`;
// Post calendar
calendarHomepage.innerHTML = "";
for (let i = 0; i < calendar.length; i++) {
  if (new Date(calendar[i].dato) >= new Date() || true) {
    calendarHomepage.innerHTML += `<p>${new Date(calendar[i].dato).toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})} - [${calendar[i].type}] ${calendar[i].informasjon}</p>`;
  }
}
// Post events
eventsHomepage.innerHTML = "";
for (let i = 0; i < calendar.length; i++) {
  if (new Date(calendar[i].dato) >= new Date("2000-1-1") && calendar[i].type == "event") {
    let info = calendar[i].informasjon
    if (info.length > 200) info = info.slice(0,200)+'...'
    eventsHomepage.innerHTML += `<li><strong>${calendar[i].title}:</strong> ${info}</li>`;
  }
}
