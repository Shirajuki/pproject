Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
// Mobile Responsive dropdown navigation - JONNY CAN FIX THIS!
function myFunction() {
  setTimeout(() => {
    document.getElementById('mobile').classList.toggle('responsivemb');
    // document.getElementById('mobile').classList.toggle('hidden');
  },200)
}
// Sticky navigation
const navbar = document.getElementById('header');
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

function showNavbar(){
  let header=document.getElementById("header")
  header.innerHTML='<nav><a href="index.html"><img src="img/logo.png" alt="LMR" style="width:100%; max-width:150px;"></a><div><ul class="right"><li class="dropdown"><a href="javascript:void(0);" class="nav_list"><br/>Info ▼ </a><div class="dropdown-content"><a href="about.html">About</a><a href="contact.html">Contact us</a></div></li><li><a class="nav_list" href="gallery.html"><br/>Gallery</a></li><li><a class="nav_list" href="news.html"><br/>News</a></li><li><a class="nav_list" href="events.html"><br/>Events</a></li><li><a class="nav_list" href="calendar.html"><br/>Calendar</a></li><li><a class="abtn nav_list" href="join.html"><br/><button>Register</button></a></li><li><a href="javascript:void(0);" class="abtn icon" onclick="myFunction()">&#9776;</a></li></ul></div></nav>'+'<div id="mobile"><div class=""><li class="dropdownmb"><a><label for="drop-1" class="toggle"><br/>Info ▼ </label></a><input type="checkbox" id="drop-1"><div class="dropdown-contentmb"><a href="about.html">About</a><a href="contact.html">Contact us</a></div></li><li><a href="gallery.html"><br/>Gallery</a></li><li><a href="news.html"><br/>News</a></li><li><a href="events.html"><br/>Events</a></li><li><a href="calendar.html"><br/>Calendar</a></li><li><a href="join.html"><br/><button>Register</button></a></li></div></div>'
}
showNavbar()

function showFooter() {
	document.getElementById("footer").innerHTML = `
			<div class="wrapper">
				<footer>
					<p>Lawnmower Racing AS</p>
					<p>Gressveien 14, 7010 Trondheim</p>
					<a href="contact.html">Contact us</a>
					<a href="about.html">About us</a>
				</footer>
			</div>
			<a href="#">
				<button id="scrollUpBtn" title="Go to top" style="opacity: 0; pointer-events: none;">▲</button>
			</a>`
}
showFooter()
