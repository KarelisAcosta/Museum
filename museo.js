import { artworks } from "./database.js";

let container = document.getElementById("container");

function show(array) {
  container.innerHTML = "";
  console.log("a");

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
    username.textContent = `${element.title},${element.place_of_origin}.${element.artist_display} `;

    if (element.place_of_origin == "Denmark") {
      console.log(element);
      card.classList.add("Denmark");
    }
  }
}

document.getElementById("btn_Country").addEventListener("click", () => {
  show(artworks.filter((e) => e.place_of_origin == "Denmark"));
});

document.getElementById("btn_Year").addEventListener("click", () => {
  show(artworks.filter((e) => e.date_display < "1966"));
});

document.getElementById("btn_all").addEventListener("click", () => {
  show(artworks);
});

document.getElementById("btn_Deparment").addEventListener("click", () => {
  show(artworks.filter((e) => e.department_title == "Prints and Drawings"));
});

show(artworks);
