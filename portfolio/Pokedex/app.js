let allPokemon = [];
let tableauFin = [];
let tableauDetail = [];
const searchInput = document.querySelector(".recherche-poke input");
const listePoke = document.querySelector(".liste-poke");
const chargement = document.querySelector(".loader");
const contenant = document.querySelector(".container");

const types = {
  grass: "#78c850",
  ground: "#E2BF65",
  dragon: "#6F35FC",
  fire: "#F58271",
  electric: "#F7D02C",
  fairy: "#D685AD",
  poison: "#966DA3",
  bug: "#B3F594",
  water: "#6390F0",
  normal: "#D9D5D8",
  psychic: "#F95587",
  flying: "#A98FF3",
  fighting: "#C25956",
  rock: "#B6A136",
  ghost: "#735797",
  ice: "#96D9D6",
  dark: "#A29288",
  steel: "#b8b8d0",
};

function fetchPokemonBase() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
    .then((reponse) => reponse.json())
    .then((allPoke) => {
      // console.log(allPoke);

      allPoke.results.forEach((pokemon) => {
        fetchPokemonComplet(pokemon);
      });
    });
}
fetchPokemonBase();

function fetchPokemonComplet(pokemon) {
  let objPokemonFull = {};
  let url = pokemon.url;
  let nameP = pokemon.name;

  fetch(url)
    .then((reponse) => reponse.json())
    .then((pokeData) => {
      // console.log(pokeData);

      objPokemonFull.pic = pokeData.sprites.front_default;
      objPokemonFull.type = pokeData.types[0].type.name;
      objPokemonFull.id = pokeData.id;
      objPokemonFull.height = Math.round((pokeData.height*0.1)*100)/100;
      objPokemonFull.weight = Math.round((pokeData.weight*0.1)*100)/100;
      console.log(objPokemonFull.weight);

      fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then((reponse) => reponse.json())
        .then((pokeData) => {
          // console.log(pokeData);

          objPokemonFull.name = pokeData.names[4].name;
          allPokemon.push(objPokemonFull);

          if (allPokemon.length === 251) {
            // console.log(allPokemon);

            tableauFin = allPokemon
              .sort((a, b) => {
                return a.id - b.id;
              })
              .slice(0, 21);
            // console.log(tableauFin);

            createCard(tableauFin);
            chargement.style.display = "none";
            apercuDetails();
          }
        });
    });
}

// Création des cartes

function createCard(arr) {
  for (let i = 0; i < arr.length; i++) {
    const carte = document.createElement("li");
    carte.setAttribute("class", `${arr[i].id}`);
    let couleur = types[arr[i].type];
    carte.style.background = couleur;

    const txtCarte = document.createElement("h5");
    txtCarte.setAttribute("class", `${arr[i].id}`);
    txtCarte.innerText = arr[i].name;

    const idCarte = document.createElement("p");
    idCarte.innerText = `ID #${arr[i].id}`;
    idCarte.setAttribute("class", `${arr[i].id}`);

    const imgCarte = document.createElement("img");
    imgCarte.src = arr[i].pic;
    imgCarte.setAttribute("class", `${arr[i].id}`);

    carte.appendChild(imgCarte);
    carte.appendChild(txtCarte);
    carte.appendChild(idCarte);
    listePoke.appendChild(carte);
  }
}

// Création Détails

function creationDetails(arr) {
  if ( i = arr) {
    const blocImg = document.querySelector(".bloc-img img");
    blocImg.src = arr.pic;

    // const fondImage = document.querySelector(".bloc-img");
    // fondImage.setAttribute("class", `${arr.id}`);
    // let couleur = types[arr.type];
    // fondImage.style.background = couleur;

    const nomP = document.querySelector(".nom h1");
    nomP.innerText = arr.name;

    const idDesc = document.querySelector(".id");
    idDesc.innerText = `ID: N° ${arr.id}`;

    const typeDesc = document.querySelector(".type");
    let couleur = types[arr.type];
    console.log(couleur);
    typeDesc.innerText = `TYPE:${arr.type}`;
    
    

    const heightDesc = document.querySelector(".taille");
    heightDesc.innerText = `TAILLE: ${arr.height}m`;

    const weightDesc = document.querySelector(".poids");
    weightDesc.innerText = `POIDS: ${arr.weight}kg`;
  }
}

//Apercu détails

function apercuDetails() {
  if (window.matchMedia("(min-width: 850px)").matches) {
    const ficheCarte = document.querySelector(".fiche");
    const carteDesc = document.querySelectorAll("li");

    carteDesc.forEach((det) => {
      det.addEventListener("click", (e) => {
        // console.log(e.target.className);
        // console.log(tableauFin);
        creationDetails(allPokemon[e.target.className - 1]);
        ficheCarte.classList.add("active-fiche");
      });
    });

    ficheCarte.addEventListener("click", () => {
      ficheCarte.classList.remove("active-fiche");
    });
  }
}

// Scrool Infini

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // console.log(scrollTop, scrollHeight, clientHeight);

  if (clientHeight + scrollTop >= scrollHeight - 20) {
    addPoke(6);
  }
});

let index = 21;

function addPoke(nb) {
  if (index > 251) {
    return;
  }
  const arrToAdd = allPokemon.slice(index, index + nb);
  createCard(arrToAdd);
  apercuDetails(arrToAdd);
  index += nb;
}

// Recherche

searchInput.addEventListener("keyup", recherche);

const formRecherche = document.querySelector("form");
formRecherche.addEventListener("submit", (e) => {
  e.preventDefault();
  recherche();
});

function recherche() {
  if (index < 251) {
    addPoke(230);
  }

  let filter, allLi, titleValue, allTitles;
  filter = searchInput.value.toUpperCase();
  allLi = document.querySelectorAll("li");
  allTitles = document.querySelectorAll("li > h5");

  for (i = 0; i < allLi.length; i++) {
    titleValue = allTitles[i].innerText;

    if (titleValue.toUpperCase().indexOf(filter) > -1) {
      allLi[i].style.display = "flex";
    } else {
      allLi[i].style.display = "none";
    }
  }
}

//Animation Input

searchInput.addEventListener("input", function (e) {
  if (e.target.value !== "") {
    e.target.parentNode.classList.add("active-input");
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove("active-input");
  }
});
