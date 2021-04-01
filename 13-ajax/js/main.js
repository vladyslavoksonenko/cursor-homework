
// 0 захватить элементы
// 1 Сделать запрос на сервер
// 2 Отобразить на элементах 

// Функция каая делает запрос на сервер

const select = document.querySelector(".select");
const title = document.querySelector("#title");
const peopleModals = document.querySelector(".people-all")
const filmsUrl = "https://swapi.dev/api/films/";

window.addEventListener("load", generateEpisodes);
select.addEventListener("change", function () {
  getFilm();
  getPeoples();
});


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
          option.innerHTML = data.results[i].episode_id;
          option.setAttribute("value", data.results[i].episode_id);
          if (data.results[i].episode_id === 5) {
            option.setAttribute("selected", "");
          }
        }
        console.log("generate episodes complit");
        resolve(data.results);
      })
  })
}

function getFilm() {
  return new Promise((resolve) => {
    let ulrFilm = filmsUrl + select.value + "/";
    console.log(ulrFilm)
    requestForServer(ulrFilm)
      .then((data) => {
        title.innerHTML = data.title;
        console.log("get film complit")
        resolve(data);
      })
  })
}

function getPeoples() {
  return new Promise(() => {
    getFilm()
      .then((data) => {
        data.characters.forEach((element) => {
          requestForServer(element)
            .then((data) => {
              console.log(data.name)
              const photo = document.createElement("img");
              peopleModals.appendChild(photo);
              const urlImg = `img/${data.name}.jpeg` || `img/${data.name}.webp`
              photo.setAttribute("src", urlImg);
              photo.setAttribute("class", "people__photo");
              console.log(photo);
              console.log(data);
            })
        });
    })
  })
  
}

console.log(peopleModals);

// function init() {
//   generateEpisodes()
//     .then(() => {
//       getFilm();
//     })
//     .then(() => {
//       getPeoples();
//     })
// }

// init();




