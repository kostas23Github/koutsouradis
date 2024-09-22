// This js file handles offcanvas phone menu functionality(enters/exists screen from right to left).

// Firstly    -> Select DOM elements
// Secondly   -> Add event listener that changes classes to DOM elements to display them accordingly.

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const menuPhoneContainer = document.querySelector("div.menu-phone");
const menuPhoneUl = document.querySelector("div.menu-phone>ul");
const menuPhoneUlItems = Array.from(menuPhoneUl.querySelectorAll("li"));

hamburger.addEventListener("click", function () {
  menuPhoneContainer.classList.add("expand");
});

closeBtn.addEventListener("click", function () {
  menuPhoneContainer.classList.remove("expand");
});

menuPhoneUlItems.forEach((item) => {
  item.firstElementChild.addEventListener("click", function () {
    menuPhoneContainer.classList.remove("expand");
  });
});
