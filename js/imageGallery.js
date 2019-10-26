const imageGallery = document.getElementById('imageGallery');
const galleries = Array(5).fill("https://dummyimage.com/150x150/000/fff");
const lightbox = document.getElementById('lightbox');
const kryss = document.getElementById('kryss');
kryss.onclick = () => openClose(false,lightbox);
imageGallery.innerHTML = "";
for (gallery of galleries) {
  let image = document.createElement('img')
  image.src = gallery;
  image.onclick = function() {
    console.log("big");
    openClose(true,lightbox);
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
