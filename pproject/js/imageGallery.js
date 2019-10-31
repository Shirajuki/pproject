const imageGallery = document.getElementById('imageGallery');
// | Bilde data her!
// v
const galleries = Array(5).fill({thumbnail: "img/150x150.png", image: "img/800x500.png"});
const lightbox = document.getElementById('lightbox');
const kryss = document.getElementById('kryss');
kryss.onclick = () => openClose(false,lightbox);
imageGallery.innerHTML = "";
for (gallery of galleries) {
  let image = document.createElement('img')
  image.src = gallery.thumbnail;
  image.onclick = function() {
    openClose(true,lightbox);
    document.getElementById('zoom').src = gallery.image;
		document.getElementById('zoom').style.animation = 'zoom 0.5s linear';
  };
  imageGallery.append(image);
}
function openClose(bool,dom) {
	if (bool) {
		dom.style.visibility = 'visible';
		dom.style.opacity = '1';
    document.getElementById('main').style.display = "none";
	} else {
		dom.style.visibility = 'hidden';
		dom.style.opacity = '0';
    document.getElementById('main').style.display = "block";
	}
}
