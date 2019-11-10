window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("main").style.display = "block";
  },300)
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  },800)
  addSnippetCalendar();
  addSnippetEvents();
});
const calendarHomepage = document.getElementById('calendarHomepage');
const eventsHomepage = document.getElementById('eventsHomepage');
document.getElementById('weekday').innerHTML = `Week ${new Date().getWeekNumber()} - date: ${new Date().toNorwegianLocaleDateString()}`;

function addSnippetCalendar() {
  let c = 0
  calendarHomepage.innerHTML = "";
  for (const article of calendar) {
    if (new Date(article.date) >= new Date()) {
      c++;
      calendarHomepage.innerHTML += `<p>${new Date(article.date).toNorwegianLocaleDateString()} - [${article.type}] ${article.info}</p>`;
    }
    if (c >= 5) break;
  }
}
function addSnippetEvents() {
  eventsHomepage.innerHTML = "";
  let c = 0
  for (const article of calendar) {
    if (new Date(article.date) >= new Date() && article.type == "event") {
      c++;
      const info = (article.info.length > 200) ? (article.info.slice(0,200)+'...') : (article.info);
      eventsHomepage.innerHTML += `<li><strong>${article.title}:</strong> ${info}</li>`;
    }
    if (c >= 2) break;
  }
}
