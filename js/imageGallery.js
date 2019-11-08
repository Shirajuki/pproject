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

const imageGallery = document.getElementById('imageGallery');
const lightbox = document.getElementById('lightbox');
const zoomedImage = document.getElementById('zoom')
const kryss = document.getElementById('kryss');
const left = document.getElementById('left');
const right = document.getElementById('right');
right.onclick = () => slide(1);
left.onclick = () => slide(-1);
kryss.onclick = () => {
  openClose(false,lightbox);
  zoomedImage.style.animation = '';
}
document.addEventListener('keyup', keyCheck);
function keyCheck(event) {
  if (lightbox.style.visibility === "visible") {
    if (event.keyCode == 37) {
      slide(1);
    } else if (event.keyCode == 39) {
      slide(-1);
    } else if (event.keyCode == 27) {
      kryss.click();
    }
  }
}
imageGallery.innerHTML = "";
for (let i = 0; i < galleries.length; i++) {
  const image = document.createElement('img')
  image.src = galleries[i].thumbnail;
  image.id = galleries[i].image
  image.alt = galleries[i].alt;
  image.dataset.index = i;
  image.onclick = function() {
    openClose(true,lightbox);
    zoomedImage.src = this.id;
    zoomedImage.dataset.index = this.dataset.index;
		zoomedImage.style.animation = 'zoom 0.3s linear';
  };
  imageGallery.append(image);
}
function slide(n) {
  let slides = parseInt(zoomedImage.dataset.index) + n;
  if (slides < 0) slides = galleries.length - 1;
  if (slides === galleries.length) slides = 0;
  document.querySelector(`img[data-index="${slides}"]`).click();
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
