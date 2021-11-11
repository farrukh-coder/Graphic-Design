
//  Модальное окно
var modalBtn = document.querySelector('.modal-btn').onclick = modalWindow;
var modalBtn2 = document.querySelector('.modal-btn_2').onclick = modalWindow;
var modalBtn3 = document.querySelector('.modal-btn_3').onclick = modalWindow2;

var closelBtn = document.querySelector('.close-window').onclick = closeWindow;
var modal = document.querySelector('.modal');

function modalWindow() {
  modal.style.transform = 'scale(1)';
  let timer = setInterval(background, 100);
  setTimeout(() => {
    clearInterval(timer);
  }, 100);
}

function modalWindow2() {
  modal.style.transform = 'scale(1)';
  let timer = setInterval(background, 100);
  setTimeout(() => {
    clearInterval(timer);
  }, 100);
  hamburgerClose();
}

function background() {
  modal.style.background = "rgba(255, 255, 255, 0.95)";
}

function closeWindow() {
  modal.style.transform = 'scale(0)';
  modal.style.background = "rgba(0, 0, 0, 0)";
}


//  Слайдер
var sliderP = document.querySelector(".slider__p");
var sliderH2 = document.querySelector(".slider__h2");
var sliderImg = document.querySelector(".slider__img");
// var sliderRadio = document.getElementsByName("slider");

function fun1() {
  var rad = document.getElementsByName('slider');

  if (rad[0].checked) {
    firstSlider();
  } else if (rad[1].checked) {
    secondSlider();
  } else {
    thirdSlider();
  }
}


function firstSlider() {
  sliderP.innerHTML = "01.";
  sliderP.style.transform = "rotateZ(0deg)";
  sliderH2.innerHTML = "Графический дизайн"
  sliderH2.style.transform = "rotateZ(0deg)";
  sliderImg.innerHTML = "<img src='img/content-img.png' class='content-img'>";
}

function secondSlider() {
  sliderP.innerHTML = "02.";
  sliderP.style.transform = "rotateZ(360deg)";
  sliderH2.innerHTML = "Веб дизайн"
  sliderH2.style.transform = "rotateZ(360deg)";
  sliderImg.innerHTML = "<img src='img/content-img1.png' class='content-img'>";
}

function thirdSlider() {
  sliderP.innerHTML = "03.";
  sliderP.style.transform = "rotateZ(720deg)";
  sliderH2.innerHTML = "Разработка логотипа"
  sliderH2.style.transform = "rotateZ(720deg)";
  sliderImg.innerHTML = "<img src='img/content-img2.png' class='content-img'>";
}


//  Гамбургер меню

var menuButton = document.querySelector(".hamburger-menu").onclick = hamburger;
var menuExit = document.querySelector(".exit-menu").onclick = hamburgerClose;

var navBtn = document.querySelector(".nav-btn");

var menuSection = document.querySelector(".mobile-nav");

function hamburger(){
  menuSection.style.right = 0;
  navBtn.style.transform = "rotate(-90deg)";
}

function hamburgerClose() {
  menuSection.style.right = -1000 + "px";
  navBtn.style.transform = "rotate(0deg)";
}



