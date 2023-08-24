
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
    const thirdslide = window.scrollY > 1550 && window.scrollY < 2500 ;
    const fourthslide = window.scrollY > 2500 && window.scrollY < 3050;
    count.classList.toggle("second", secondslide);
    count.classList.toggle("third", thirdslide);
    count.classList.toggle("fourth", fourthslide);
  
  });
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX + -50;
    let y = e.pageY + -50;
    
    const hover = document.querySelector(".project:hover .hover")
    
  
    hover.style.top = y + "px" ;
    hover.style.left = x + "px" ;
  
  });