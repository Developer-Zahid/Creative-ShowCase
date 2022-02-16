let popup = document.querySelector(".popup");
let portfolioImage = document.querySelector(".popup__image");
let portfolioContent = document.querySelectorAll(".portfolio__overlay");
function popupImage(img_url){
    portfolioImage.src = img_url;
};
portfolioContent.forEach(portfolioContent =>{
    portfolioContent.addEventListener("click", ()=>{
        popup.classList.add("active")
    });
})
popup.addEventListener("click", ()=>{
    popup.classList.remove("active")
})