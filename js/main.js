const navList = document.querySelector(".nav-list")
document.querySelector(".hamburger").addEventListener('click',  () => {
    navList.classList.add("show");
}); 

document.querySelector(".close").addEventListener('click',  () => {
    navList.classList.remove("show");
}); 

