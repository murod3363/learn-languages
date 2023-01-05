let menu = document.querySelector(".menu");
let cansel = document.querySelector(".cansel");
let nav =  document.querySelector(".haeder__top-inner")
console.log(menu);
menu.addEventListener("click", () => {
    nav.style.transform = "translateX(0)" 
} )
cansel.addEventListener("click", () => {
    nav.style.transform = "translateX(-101%)" 
} )