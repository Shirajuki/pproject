window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("main").style.display = "block";
  },300)
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  },800)
});
const calendarHomepage = document.getElementById('calendarHomepage');
const eventsHomepage = document.getElementById('eventsHomepage');
document.getElementById('weekday').innerHTML = `Week ${new Date().getWeekNumber()} - date: ${new Date().toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})}`;

// Post calendar
calendarHomepage.innerHTML = "";
let c = 0
for (const article of calendar) {
  if (new Date(article.date) >= new Date()) {
    c++;
    calendarHomepage.innerHTML += `<p>${new Date(article.date).toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})} - [${article.type}] ${article.info}</p>`;
  }
  if (c >= 5) break;
}
// Post events
eventsHomepage.innerHTML = "";
c = 0
for (const article of calendar) {
  if (new Date(article.date) >= new Date() && article.type == "event") {
    c++;
    const info = (article.info.length > 200) ? (article.info.slice(0,200)+'...') : (article.info);
    eventsHomepage.innerHTML += `<li><strong>${article.title}:</strong> ${info}</li>`;
  }
  if (c >= 2) break;
}
