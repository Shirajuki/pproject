let navbar, header;
window.addEventListener('load', () => {
  navbar = document.getElementById('header');
  header = document.getElementById("header")
  showNavbar()
  showFooter()
});

// Start
// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Returns the ISO week of the date.
Date.prototype.getWeekNumber = function() {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}
// Source: https://weeknumber.net/how-to/javascript
// End

Date.prototype.toNorwegianLocaleDateString = function() {
  return new Date(this.getTime()).toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'});
}
function sortListByDate(list) {
	return list.sort((a, b) => new Date(a.date) - (new Date(b.date)))
};

function mobileDropdown() {
  setTimeout(() => {
    document.getElementById('mobile').classList.toggle('responsivemb');
  },200)
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("scrollUpBtn").style.opacity = 1;
        document.getElementById("scrollUpBtn").style.pointerEvents = "all";
        navbar.classList.add("sticky");
    } else {
        document.getElementById("scrollUpBtn").style.opacity = 0;
        document.getElementById("scrollUpBtn").style.pointerEvents = "none";
        navbar.classList.remove("sticky");
    }
}
function showNavbar() {
  header.innerHTML=`<nav><a href="index.html"><img src="img/logo.png" alt="LMR" style="width:100%; max-width:150px;"></a><div><ul class="right"><li><a class="navList" href="index.html"><br>Home</a></li><li class="dropdown"><a href="javascript:void(0);" class="navList"><br/>Info ▼ </a><div class="dropdown-content"><a href="about.html">About</a><a href="contact.html">Contact us</a></div></li><li><a class="navList" href="gallery.html"><br/>Gallery</a></li><li><a class="navList" href="news.html"><br/>News</a></li><li><a class="navList" href="events.html"><br/>Events</a></li><li><a class="navList" href="calendar.html"><br/>Calendar</a></li><li><form action="join.html"><br/><input class="button abtn navList" type="submit" value="Join us!"/></form></li><li><a href="javascript:void(0);" class="abtn icon" onclick="mobileDropdown()">&#9776;</a></li></ul></div></nav><div id="mobile"><ol><li><a href="index.html"><br/>Home</a></li><li class="dropdownmb"><span><label for="drop-1" class="toggle"><br/>Info ▼ </label></span><input type="checkbox" id="drop-1"><div class="dropdown-contentmb"><a href="about.html">About</a><a href="contact.html">Contact us</a></div></li><li><a href="gallery.html"><br/>Gallery</a></li><li><a href="news.html"><br/>News</a></li><li><a href="events.html"><br/>Events</a></li><li><a href="calendar.html"><br/>Calendar</a></li><li><form action="join.html"><br/><input class="button" type="submit" value="Join us!"/></form></li></ol></div>`;
}
function showFooter() {
  // Socialmedia icon-set taken from https://www.iconfinder.com/iconsets/2018-social-media-logotypes
	document.getElementById("footer").innerHTML = `
			<div class="wrapper">
				<footer>
          <div class="socialMedias">
            <a href="javascript:void(0)"><img class='socialIcons' src="img/facebook.png" alt="facebook icon"/></a>
            <a href="javascript:void(0)"><img class='socialIcons' src="img/instagram.png" alt="instagram icon"/></a>
            <a href="javascript:void(0)"><img class='socialIcons' src="img/twitter.png" alt="twitter icon"/></a>
            <a href="javascript:void(0)"><img class='socialIcons' src="img/snapchat.png" alt="snapchat icon"/></a>
          </div>
					<p>Lawnmower Racing AS</p>
					<p>Gressveien 14, 7010 Trondheim</p>
					<a href="contact.html">Contact us</a>
					<a href="about.html">About us</a>
				</footer>
			</div>
      <a id="scrollUpBtn" title="Go to top" href="#" style="opacity: 0;pointer-events: none;width: 30px;height: 30px;">▲</a>`;
}
