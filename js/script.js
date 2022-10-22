const swiper = new Swiper(".mySwiper", {});

const loogin = document.querySelector(".into--loogin--btn5")
loogin.addEventListener("click", ()=> {
    document.querySelector(".into--modal").style.display = "block"
})

const authori = document.querySelector(".into--modal--bg--fair--authori")
authori .addEventListener("click", ()=> {
    document.querySelector(".into--modal").style.display = "none"
})