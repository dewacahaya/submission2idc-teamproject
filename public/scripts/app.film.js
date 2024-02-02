import { getFilmById, getFilms } from "./api.js";
import { generateRandomNumber, generateElement } from "./utils/index.js";

const filmCover = document.getElementById("recomen-film")
const judul = document.querySelector("#title-film")
const tahunRilis = document.querySelector("#year-film")

document.addEventListener("DOMContentLoaded", async ()  => {

    try {
      
      const response = await getFilmById(1);
      console.log(response)

      if (!response) return;

      judul.innerText = response.title || "wait";

      tahunRilis.innerHTML = response.year || "wait";


      // console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  });

