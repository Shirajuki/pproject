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
// console.log(calendarHomepage,eventsHomepage);
document.getElementById('weekday').innerHTML = `Week ${new Date().getWeekNumber()} - date: ${new Date().toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})}`;
// Post calendar
calendarHomepage.innerHTML = "";
let c = 0
for (let i = 0; i < calendar.length; i++) {
  if (new Date(calendar[i].date) >= new Date()) {
    c++;
    calendarHomepage.innerHTML += `<p>${new Date(calendar[i].date).toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})} - [${calendar[i].type}] ${calendar[i].info}</p>`;
  }
  if (c >= 5) break;
}
// Post events
eventsHomepage.innerHTML = "";
c = 0
for (let i = 0; i < calendar.length; i++) {
  if (new Date(calendar[i].date) >= new Date() && calendar[i].type == "event") {
    c++;
    let info = calendar[i].info
    if (info.length > 200) info = info.slice(0,200)+'...'
    eventsHomepage.innerHTML += `<li><strong>${calendar[i].title}:</strong> ${info}</li>`;
  }
  if (c >= 2) break;
}
