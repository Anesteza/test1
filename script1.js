
document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }

}

document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = "none";
    }
}
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const images = document.querySelectorAll(".photos img");

let imageIndex = 0;

nextButton.onclick = function () {
  images[imageIndex].classList.remove("show");

  if(imageIndex >= images.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex = imageIndex + 1;
  }

  images[imageIndex].classList.add("show");
};

prevButton.onclick = function () {
  images[imageIndex].classList.remove("show");

  if (imageIndex <= 0) {
    imageIndex = images.length - 1;
  } else {

  imageIndex = imageIndex - 1;
  }
  images[imageIndex].classList.add("show");
};
