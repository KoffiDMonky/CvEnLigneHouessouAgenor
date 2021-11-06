//Navbar animée
const btnNav = document.querySelector('.responsive-nav-btn');
const listeNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

    listeNav.classList.toggle('active-nav');
    if(window.location.href.includes('index')){
        if(imgBtn.src.includes('menu')){
            imgBtn.src = './ressources/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.heigth = "30px";
        }else{
            imgBtn.src = './ressources/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.heigth = "40px";
        }
    } else {
        if(imgBtn.src.includes('menu')){
            imgBtn.src = '../ressources/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.heigth = "30px";
        }else{
            imgBtn.src = '../ressources/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.heigth = "40px";
        }
    }
    

})
console.log(window.location.href);



//Compte à rebourd

const text = document.querySelector('.date');

function getChrono(){

    const now = new Date().getTime();
    const countdownDate = new Date('december 20, 2022').getTime();

    const distanceBase = countdownDate - now;


    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s` ;

}

getChrono()

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000);





