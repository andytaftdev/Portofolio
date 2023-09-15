
const scroll = document.querySelector(".navbar");

const navheight = scroll.offsetHeight;
const animate = document.querySelector(".animate")
const balls = document.querySelector(".balls")
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");
const slide1 = document.querySelector(".slide1");
const count = document.querySelector(".moved-count");
const nav = document.querySelector(".count")

document.documentElement.style.setProperty(
    "--scroll-padding",
    navheight + "px"
);


window.addEventListener("DOMContentLoaded", () => {
  scroll.classList.toggle("load");
  nav.classList.toggle("load");

    setTimeout(() => {
        balls.classList.toggle("load");
        shadow.classList.toggle("gone");

       }, 5000);
       setTimeout(() => {
        slide1.classList.toggle("show");
        scroll.classList.remove("load");
        nav.classList.remove("load");
       }, 5300);


       setTimeout(() => {
        balls.classList.toggle("gone");
        animate.classList.toggle("gone");
        body.classList.toggle("enable");
        
        
       }, 5600);
 });    
  // let slideText = 0;
//  textFunction0 = true;
//  textFunction1 = true;
//  textFunction2 = true;
//  textFunction3 = true;


//   if (window.scrollY < 550) {
//     if (textFunction0 = true) {
//       slideText = (slideText + 1) % count.children.length;
//       updateText();
//       textFunction0 = false;
//     } else if (textFunction0 = false) {
//       slideText = (slideText - 1 + count.children.length) % count.children.length;
//       updateText();
//       textFunction0 = true;
//     }
//   } else if (window.scrollY > 550 && window.scrollY < 1550) {
//     if (textFunction1 = true) {
//       slideText = (slideText + 1) % count.children.length;
//       updateText();
//       textFunction1 = false;
//     } else if (textFunction1 = false) {
//       slideText = (slideText - 1 + count.children.length) % count.children.length;
//       updateText();
//       textFunction1 = true;
//     }
//   } else if (window.scrollY > 1550 && window.scrollY < 2550) {
//     if (textFunction2 = true) {
//       slideText = (slideText + 1) % count.children.length;
//       textFunction2 = false;
//     } else if (textFunction2 = false) {
//       slideText = (slideText - 1 + count.children.length) % count.children.length;
//       updateText();
//       textFunction2 = true;
//     }
//   } else if (window.scrollY > 2550) {
//     if (textFunction3 = true) {
//       slideText = (slideText + 1) % count.children.length;
//       updateText();
//       textFunction3 = false;
//     } else if (textFunction3 = false) {
//       slideText = (slideText - 1 + count.children.length) % count.children.length;
//       updateText();
//       textFunction3 = true;
//     }
//   }
//   window.addEventListener("scroll", () => {
//     console.log(textFunction1)
//   });


// function updateText() {
//   const slideHeight = count.children[0].clientWidth;
//   count.style.transform = `translateY(-${slideHeight * slideText}px)`;
// }

      


window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const secondslide = window.scrollY > 750 && window.scrollY < 1750 ;
  const thirdslide = window.scrollY > 1750 && window.scrollY < 3000 ;
  const fourthslide = window.scrollY > 3000 && window.scrollY < 4500;
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
