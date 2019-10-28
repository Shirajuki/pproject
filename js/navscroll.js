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
