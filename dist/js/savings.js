
const image = document.querySelector(".image");
const image2 = document.querySelector(".img-slide2");
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