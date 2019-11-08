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
kryss.onclick = () => openClose(false,lightbox);

imageGallery.innerHTML = "";
for (let i = 0; i < galleries.length; i++) {
  let image = document.createElement('img')
  image.src = galleries[i].thumbnail;
  image.id = galleries[i].image
  image.alt = galleries[i].alt;
  image.title = i;
  image.onclick = function() {
    openClose(true,lightbox);
    zoomedImage.src = this.id;
    zoomedImage.title = this.title;
		zoomedImage.style.animation = 'zoom 0.3s linear';
    setTimeout(_=> zoomedImage.style.animation = '', 300);
  };
  imageGallery.append(image);
}
function slide(n) {
  console.log(zoomedImage.title);
  let slides = parseInt(zoomedImage.title) + n;
  if (slides < 0) slides = galleries.length - 1;
  if (slides === galleries.length) slides = 0;
  console.log(`img[title="${slides}"]`)
  document.querySelector(`img[title="${slides}"]`).click();
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
