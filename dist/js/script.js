
const scroll = document.querySelector(".navbar");

const navheight = scroll.offsetHeight;
const animate = document.querySelector(".animate")
const balls = document.querySelector(".balls")
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");
const slide1 = document.querySelector(".slide1");
const count = document.querySelector(".moved-count");

document.documentElement.style.setProperty(
    "--scroll-padding",
    navheight + "px"
);

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        balls.classList.toggle("load");
        shadow.classList.toggle("gone");
       }, 5000);
       setTimeout(() => {
        slide1.classList.toggle("show");
       }, 5300);


       setTimeout(() => {
        balls.classList.toggle("gone");
        animate.classList.toggle("gone");
        body.classList.toggle("enable");
        
        
       }, 5600);
});
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const secondslide = window.scrollY > 550 && window.scrollY < 1550 ;
    const thirdslide = window.scrollY > 1550 && window.scrollY < 2050 ;
    count.classList.toggle("second", secondslide);
    count.classList.toggle("third", thirdslide);
    
  
  });