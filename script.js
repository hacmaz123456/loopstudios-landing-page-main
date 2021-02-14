// Menu mobile
function mobileMenu() {
  var menuItems = document.getElementById("menu-items");
  var menuBtn = document.getElementById("menu-btn");

  if (menuItems.style.display === "flex") {
    menuBtn.className = "fas fa-bars";
    menuItems.style.display = "none";
  } else {
    menuBtn.className = "fas fa-times";
    menuItems.style.display = "flex";
    menuItems.style.backgroundColor = "rgba(0, 0, 0, 0.952)";
  }
}

// Change source image PC - Mobile
var platform = "desktop";

checkScreen(); // Check onload
changeImg(); // Check onload

function checkScreen() {
  // Detect screen
  if (window.matchMedia("screen and (max-width: 900px)").matches) {
    platform = "mobile";
  } else {
    platform = "desktop";
  }
}

function changeImg() {
  // Change images src
  var imgList = document.getElementsByClassName("img-list");
  var listImg = [
    "images/" + platform + "/image-deep-earth.jpg",
    "images/" + platform + "/image-night-arcade.jpg",
    "images/" + platform + "/image-soccer-team.jpg",
    "images/" + platform + "/image-grid.jpg",
    "images/" + platform + "/image-from-above.jpg",
    "images/" + platform + "/image-pocket-borealis.jpg",
    "images/" + platform + "/image-curiosity.jpg",
    "images/" + platform + "/image-fisheye.jpg",
  ];

  for (var i = 0; i < imgList.length; i++) {
    imgList[i].src = listImg[i];
  }
}

window.onresize = function () {
  // Check when resize
  checkScreen();
  changeImg();
};
