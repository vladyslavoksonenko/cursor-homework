
// 0 захватить элементы
// 1 Сделать запрос на сервер
// 2 Отобразить на элементах 

// Функция каая делает запрос на сервер

const select = document.querySelector(".select");
const title = document.querySelector("#title");
const peopleAll = document.querySelector(".people-all")
const peoplesButton = document.querySelector("#peoples-button");
const planets = document.querySelector(".planets-block");
const planet = document.querySelector(".planet-block");
const planetButton = document.querySelector(".planet-button");
const planetButtons = document.querySelectorAll(".arrow");
const filmsUrl = "https://swapi.dev/api/films/";
const planetsUrl = "https://swapi.dev/api/planets/";
let index = 1;

peoplesButton.addEventListener("click", function () {
  peopleAll.classList.toggle("hidden-block");
  planets.classList.add("hidden-block");
})
planetButton.addEventListener("click", function () {
  peopleAll.classList.add("hidden-block");
  planets.classList.toggle("hidden-block");
})
select.addEventListener("change", function () {
  getFilm();
  getPeoples();
  getPlanets();
});
planetButtons[0].addEventListener("click", () => {
  index--;
  getPlanets(index);
})
planetButtons[1].addEventListener("click", () => {
  index++;
  getPlanets(index);
})

init();

function init() {
  generateEpisodes()
    .then(() => {
      getFilm();
    })
    .then(() => {
      getPeoples();
    })
    .then(() => {
      getPlanets();
    })
}

function requestForServer(url) {
    return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(error => console.log(error)); 
}

function generateEpisodes() {
  return new Promise((resolve) => {
    requestForServer(filmsUrl)
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          const option = document.createElement("option");
          select.appendChild(option);
          option.innerHTML = `Эпизод ${data.results[i].episode_id}`;
          option.setAttribute("value", data.results[i].episode_id);
          if (data.results[i].episode_id === 5) {
            option.setAttribute("selected", "");
          }
        }
        resolve(data.results);
      })
  })
}

function getFilm() {
  return new Promise((resolve) => {
    let ulrFilm = filmsUrl + select.value + "/";
    requestForServer(ulrFilm)
      .then((data) => {
        title.innerHTML = data.title;
        resolve(data);
      })
  })
}

function getPeoples() {
  return new Promise(() => {
    getFilm()
      .then((data) => {
        peopleAll.innerHTML = "";
        data.characters.forEach((element) => {
          requestForServer(element)
            .then((data) => {
              
              const modalPeople = document.createElement('div');
              modalPeople.setAttribute("class", "people__modal");
                const photo = document.createElement("img");
                let urlImg = `img/${data.name}.jpeg`;
                photo.setAttribute("src", urlImg);
                photo.addEventListener("error", () => {
                  let urlImg = `img/noname.jpeg`;
                  photo.setAttribute("src", urlImg);
                })
                // urlImg = `img/${data.name}.webp`
                // photo.setAttribute("src", urlImg);
                // console.log(photo.header);
              photo.setAttribute("class", "people__photo");
              const namePeople = document.createElement('div');
              namePeople.setAttribute("class", "people__name")
              const yearPeople = document.createElement('div');
              yearPeople.setAttribute("class", "people__year");
              const genderPeople = document.createElement('div');
              genderPeople.setAttribute("class", "people__gender");

              namePeople.innerHTML = `<span class="decoration">Имя:</span> ${data.name}`;
              yearPeople.innerHTML = `<span class="decoration">День рождения:</span> ${data.birth_year}`;

              if (data.gender === "female") {
                genderPeople.innerHTML = `<span class="decoration">Пол:</span> &#9792`;
              } else if(data.gender === "male") {
                genderPeople.innerHTML = `<span class="decoration">Пол:</span> &#9794`;
              } else if (data.gender === "n/a") {
                genderPeople.innerHTML = `<span class="decoration">Пол:</span> n/a`;
              }
              

              peopleAll.appendChild(modalPeople);
              modalPeople.appendChild(namePeople);
              modalPeople.appendChild(yearPeople);
              modalPeople.appendChild(genderPeople);
              modalPeople.appendChild(photo);   
              
            })
        
        });
    })
  })
  
}


function getPlanets(index = 1) {
  return new Promise(() => {
    planet.innerHTML = "";
    let urlPlanet = `${planetsUrl}${index}`
    console.log(urlPlanet)
    requestForServer(urlPlanet)
    .then((data) => {
        const namePlanet = document.createElement("div");
        namePlanet.innerHTML = `Планета: ${data.name}`;
        const photo = document.createElement("img");
        photo.setAttribute("src", `img/${data.name}.jpeg`);
        planet.appendChild(namePlanet);
        planet.appendChild(photo);
    })
  })
}



// function getPlanets() {
//   return new Promise((resolve) => {
//     requestForServer(planetsUrl)
//     .then((data) => {
//       let index = 0;  
//       function getPlanet(index) {
        
//       }
//       getPlanet(index);
//     })
//     .then((data) => {
//       planetButtons[0].addEventListener("click", () => {
//         index++;
//         getPlanet(index);
//       })
//       planetButtons[1].addEventListener("click", () => {
//         index--;
//         getPlanet(index);
//       })
//     })
//   })
// }



// function getPlanetsInfo() {
//   return new Promise(() => {
//     getPlanets()
//   })
// }

