// Load DOMs and event listeners
const imageGallery = document.getElementById('imageGallery');
const lightbox = document.getElementById('lightbox');
const zoomedImage = document.getElementById('zoom')
const closeX = document.getElementById('closeX');
const left = document.getElementById('left');
const right = document.getElementById('right');
right.addEventListener('click', _ => slide(1));
left.addEventListener('click', _ => slide(-1));
closeX.addEventListener('click', _ => {
  openClose(false,lightbox);
  zoomedImage.style.animation = '';
});
// Adds
document.addEventListener('keyup', keyCheckSlideshow);
function keyCheckSlideshow(event) {
  if (lightbox.style.visibility === "visible") {
    if (event.keyCode === 37) {
      left.click();
    } else if (event.keyCode === 39) {
      right.click();
    } else if (event.keyCode === 27) {
      closeX.click();
    }
  }
}
window.addEventListener('load', () => {
  loadGallery(galleries)
  zoomImage(zoomedImage,galleries[0].image,0)
});
function zoomImage(img,id,index) {
  img.src = id;
  img.dataset.index = index;
}
function loadGallery(list) {
  imageGallery.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const image = document.createElement('img')
    image.src = list[i].thumbnail;
    image.id = list[i].image
    image.alt = list[i].alt;
    image.dataset.index = i;
    image.onclick = function() {
      openClose(true,lightbox);
      zoomImage(zoomedImage,this.id,this.dataset.index);
      zoomedImage.style.animation = 'zoom 0.3s linear';
    };
    imageGallery.append(image);
  }
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
