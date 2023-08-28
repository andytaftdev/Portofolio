
const image = document.querySelector(".image");
const image2 = document.querySelector(".img-slide2");
const text1 = document.querySelector(".con-move");
const textbig= document.querySelector(".text-animate");
const textdev= document.querySelector(".text-dev");
const animate = document.querySelector(".animate");
const slide1 = document.querySelector(".slide-1");
const s1img = document.querySelector(".image");
const body = document.querySelector("body");
const string1 = document.querySelector(".string-1");
const string2 = document.querySelector(".string-2");



window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        text1.classList.toggle("show");
       }, );
       setTimeout(() => {
        textbig.classList.toggle("slide");
       }, 1200);
       setTimeout(() => {
        textdev.classList.toggle("show");
       }, 2200);
       
       setTimeout(() => {
        textdev.classList.toggle("show1");
       }, 3200);
       setTimeout(() => {
        textdev.classList.toggle("show2");
       }, 4200);
       setTimeout(() => {
        textdev.classList.toggle("show3");
       }, 5200);
       setTimeout(() => {
        textdev.classList.toggle("show4");
       }, 6200);
       setTimeout(() => {
        animate.classList.toggle("gone");
        slide1.classList.toggle("show");
       }, 7500);
       setTimeout(() => {
        animate.classList.toggle("gones");
        slide1.classList.remove("show");
        s1img.classList.toggle("show");
        body.classList.toggle("on");
        image2.classList.toggle("on");
        string1.classList.toggle("on");
        string2.classList.toggle("on");
        

       }, 8000);
  
  
});



window.addEventListener("scroll", () => {
console.log(window.scrollY);
if (window.scrollY > 0) {
    const scrollY = window.scrollY;
    const scroll2 = scrollY * 0.01;
    const scroll = scrollY * -0.03;
    image.style.transform = `translateY(${scroll}%)`;
    image2.style.transform = `translateY(${scroll2}%) rotate(-10deg)`;
}
if (window.scrollY > 700) {
    image2.style.transform = `translateY(${0}%) rotate(-10deg)`;
}
});
