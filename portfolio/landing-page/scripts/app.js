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

//Compteur chiffre

const ratio = .3
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const handleIntersect = function (entries, observer) {
      entries.forEach(function(entry){
          if (entry.intersectionRatio > ratio){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            observer.unobserve(entry.target)

          }
      })
  }

  const observer = new IntersectionObserver(handleIntersect, options);
  const compteur = document.querySelector('.count')
  observer.observe(compteur);

// Typewriter YOUTUBEUR

const txtAnim = document.querySelector('#youtubeur');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay('60')
.typeString('<strong>Romain Lanery</strong>')
.pauseFor(1000)
.deleteChars(13)
.pauseFor(500)
.typeString('<strong>Benjamin Code</strong>')
.pauseFor(1000)
.deleteChars(13)
.pauseFor(500)
.typeString('<strong>Hardisk</strong>')
.pauseFor(1000)
.deleteChars(7)
.pauseFor(500)
.typeString('<strong>NowTech</strong>')
.pauseFor(1000)
.deleteChars(7)
.pauseFor(500)
.typeString('<strong>Monsieur Grrr</strong>')
.pauseFor(1000)
.deleteChars(13)
.pauseFor(500)
.typeString('<strong>Cyprien</strong>')
.pauseFor(1000)
.deleteChars(7)
.pauseFor(500)
.typeString('<strong>Hugo Décrypte</strong>')
.pauseFor(1000)
.deleteChars(13)
.pauseFor(500)
.typeString('<strong>Anonimal</strong>')
.pauseFor(1000)
.deleteChars(8)
.pauseFor(500)
.typeString('<strong>Micode</strong>')
.pauseFor(1000)
.deleteChars(6)
.pauseFor(500)
.typeString('<strong>PP World</strong>')
.pauseFor(1000)
.deleteChars(7)
.pauseFor(500)
.typeString('<strong>annacotech</strong>')
.pauseFor(1000)
.deleteChars(11)
.pauseFor(500)
.typeString('<strong>Léo Duff</strong>')
.pauseFor(1000)
.deleteChars(8)
.pauseFor(500)
.typeString('<strong>Dr Nozman</strong>')
.pauseFor(1000)
.deleteChars(9)
.pauseFor(500)
.typeString('<strong>Natoo</strong>')
.pauseFor(1000)
.deleteChars(5)
.pauseFor(500)
.typeString('<strong>Un Créatif</strong>')
.pauseFor(1000)
.deleteChars(10)
.start()



//FAQ

const allCross = document.querySelectorAll('.panneau-visible img');

allCross.forEach(logo => {

    logo.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus')){
            this.src = "./ressources/minus.svg";
            currentChoice.style.height = height + 20 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        }else{
            this.src = "./ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = "0px 15px";
        }

   })
    
})

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