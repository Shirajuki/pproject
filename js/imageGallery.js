const imageGallery = document.getElementById('imageGallery');
// | Bilde data her!
// v
// const galleries = Array(12).fill({thumbnail: "img/150x150.png", image: "img/800x500.png", alt: "dummyImage"});
const galleries = [
  {thumbnail: "img/thumb_1.jpg", image: "img/gallery_1.jpg", alt: "image 1 of gallery"},
  {thumbnail: "img/thumb_2.jpg", image: "img/gallery_2.jpg", alt: "image 2 of gallery"},
  {thumbnail: "img/thumb_3.jpg", image: "img/gallery_3.jpg", alt: "image 3 of gallery"},
  {thumbnail: "img/thumb_4.jpg", image: "img/gallery_4.jpg", alt: "image 4 of gallery"},
  {thumbnail: "img/thumb_5.jpg", image: "img/gallery_5.jpg", alt: "image 5 of gallery"},
  {thumbnail: "img/thumb_6.jpg", image: "img/gallery_6.jpg", alt: "image 6 of gallery"},
  {thumbnail: "img/thumb_7.png", image: "img/gallery_7.png", alt: "image 7 of gallery"},
  {thumbnail: "img/thumb_8.jpg", image: "img/gallery_8.jpg", alt: "image 8 of gallery"},
];
const lightbox = document.getElementById('lightbox');
const kryss = document.getElementById('kryss');
kryss.onclick = () => openClose(false,lightbox);
imageGallery.innerHTML = "";
for (gallery of galleries) {
  let image = document.createElement('img')
  image.src = gallery.thumbnail;
  image.id = gallery.image
  image.alt = gallery.alt;
  image.onclick = function() {
    openClose(true,lightbox);
    console.log(gallery);
    document.getElementById('zoom').src = this.id;
		document.getElementById('zoom').style.animation = 'zoom 0.5s linear';
    setTimeout(_=> document.getElementById('zoom').style.animation = '', 1000);
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
