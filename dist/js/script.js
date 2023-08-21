
const scroll = document.querySelector(".navbar");

const navheight = scroll.offsetHeight;
const animate = document.querySelector(".animate")
const balls = document.querySelector(".balls")
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");
const slide1 = document.querySelector(".slide1");

document.documentElement.style.setProperty(
    "--scroll-padding",
    navheight + "px"
);

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        balls.classList.toggle("load");
        shadow.classList.toggle("gone");
       }, 3900);
       setTimeout(() => {
        slide1.classList.toggle("show");
       }, 4200);


       setTimeout(() => {
        balls.classList.toggle("gone");
        animate.classList.toggle("gone");
        body.classList.toggle("enable");
        
        
       }, 4400);
});