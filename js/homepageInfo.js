const calendarHomepage = document.getElementById('calendarHomepage');
const eventsHomepage = document.getElementById('eventsHomepage');
console.log(calendarHomepage,eventsHomepage);
// Calculate week number
Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
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
    eventsHomepage.innerHTML += `<li><strong>${calendar[i].title}:</strong> ${calendar[i].informasjon}</li>`;
  }
}
