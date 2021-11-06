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



//Onglets

const choixTarifs = Array.from(document.querySelectorAll('.choix'));
const contenuTarifs = Array.from(document.querySelectorAll('.panneau'));

choixTarifs.forEach(choix => {
    choix.addEventListener('click' , (e) => {
        console.log('ok');

        let indexClic = choixTarifs.indexOf(e.target);

        for(i = 0; i < choixTarifs.length; i++){

            if(i === indexClic){
                choixTarifs[i].classList.add('active-choix');
                contenuTarifs[i].classList.add('panneau-active');
            } else {
                choixTarifs[i].classList.remove('active-choix');
                contenuTarifs[i].classList.remove('panneau-active');
            }
        }
    })
})