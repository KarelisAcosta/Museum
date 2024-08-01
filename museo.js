import { artworks } from "./database.js";

let container = document.getElementById("container");

function show(array) {
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    let image = document.createElement("img");
    card.appendChild(image);
    image.src = element.image_src;

    let username = document.createElement("p");
    card.appendChild(username);
    username.textContent = `${element.title}${
      element.place_of_origin ? ", " + element.place_of_origin : ""
    }. ${element.artist_display}`;
  }
}

let placesOfOrigin = [...new Set(artworks.map((e) => e.place_of_origin))]
  .filter((e) => e != "")
  .sort();
console.log(placesOfOrigin);
let currentPlace = 0;
document.getElementById("btn_Country").addEventListener("click", () => {
  show(
    artworks.filter((e) => e.place_of_origin == placesOfOrigin[currentPlace])
  );
  document.getElementById("btn_Country").textContent =
    placesOfOrigin[currentPlace];
  currentPlace++;
  if (currentPlace >= placesOfOrigin.length) {
    currentPlace = 0;
  }
});

document.getElementById("btn_Year").addEventListener("click", () => {
  show(artworks.filter((e) => e.date_end && e.date_end < 1700));
});

document.getElementById("btn_all").addEventListener("click", () => {
  show(artworks);
});

let departments = [...new Set(artworks.map((e) => e.department_title))]
  .filter((e) => e != "")
  .sort();
let currentDepartment = 0;

document.getElementById("btn_Deparment").addEventListener("click", () => {
  show(
    artworks.filter((e) => e.department_title == departments[currentDepartment])
  );
  document.getElementById("btn_Deparment").textContent =
    departments[currentDepartment];
  currentDepartment++;
  if (currentDepartment >= departments.length) {
    currentDepartment = 0;
  }
});

show(artworks);
